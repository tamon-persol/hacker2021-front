let isAllCheckPassed = true;

// NOTE: 'WIP'がPRタイトルに含まれている
if (danger.github.pr.title.toUpperCase().includes('WIP')) {
  fail(":rotating_light: PRのタイトルに'WIP'が含まれています。作業完了後にPRを出してください。");
}

// NOTE: 'DNM'がPRタイトルに含まれている
if (danger.github.pr.title.toUpperCase().includes('DNM')) {
  fail(":rotating_light: PRのタイトルに'DNM'が含まれています。マージして良いか確認してください。");
}

// NOTE: レビューワーを指定していない
if (danger.github.pr.requested_reviewers.length === 0) {
  warn(":rotating_light: レビューワーが指定されていません。");
  isAllCheckPassed = false;
}

// NOTE: 下のコメントアウトについて、現状本プロジェクトにそぐわないチェック内容なので一旦スルーしてます。必要なときに必要なやり方で書き換えてください。

// NOTE: PRのタイトルにIssues番号(ex. #123)が含まれていない場合
// const hasIssuesNumber = /#[0-9]/.test(danger.github.pr.title);
// if (!hasIssuesNumber) {
//   warn(":rotating_light: Issuesに紐付いていません。");
//   isAllCheckPassed = false;
// }

// NOTE: 500行以上の差分がある
const diffSize = Math.max(danger.github.pr.additions, danger.github.pr.deletions);
if (diffSize > 500) {
  warn(":rotating_light: 変更行数は500行未満を目指してください。");
  isAllCheckPassed = false;
}

// NOTE: 10個以上のファイルを編集している
if (danger.github.pr.changed_files > 10 ) {
  warn(":rotating_light: 変更ファイル数は10未満を目指してください。");
  isAllCheckPassed = false;
}

if (isAllCheckPassed) markdown('<div align="center"><h2>すべてのチェックが完了しました :tada:</h2></div>')
markdown('<div align="center"><h3>:robot: PR Reviewing By Danger :robot:</h3></div>')
