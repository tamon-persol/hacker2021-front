import express, { Request, Response } from 'express';
import next from 'next';
import { join } from 'path';
// import { createProxyMiddleware } from 'http-proxy-middleware';

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const main = async (): Promise<void> => {
  await app.prepare();
  const server = express();

  // proxy to LP
  // FIXME: LPの運用がサブドメインの場合は不要
  // server.use(
  //   '/lp',
  //   createProxyMiddleware({
  //     target: 'https://hogehoge.firebaseapp.com/',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/lp': '/'
  //     }
  //   })
  // );

  // proxy to API
  // FIXME: targetを正しく書き換える
  // server.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'https://hogehoge.appspot.com/',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api': '/'
  //     }
  //   })
  // );

  // service-worker
  server.get('/service-worker.js', (req: Request, res: Response) => {
    const filePath = join(__dirname, '../../.next/service-worker.js');
    return res.sendFile(filePath);
  });

  // nextjs routing
  server.get('*', (req, res) => {
    void handle(req, res);
  });

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
};

main().catch((err) => {
  console.error('[ERROR] Faild to start Next.js Server.', err);
});
