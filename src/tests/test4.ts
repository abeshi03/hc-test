// m秒を引数に受け取り、N時間N分N秒を返す関数を以下の条件で作成してください
// 条件1 ... 時間に関しては0の場合は省略しN分N秒の形で返してください
// 条件2 ... 1〜9のように一桁の数字になる場合は、01分や03時間、04秒のような形で二桁にして返してください。

// 作成した関数を適当なm秒を引数にとってconsole.logで実行してください

// TODO
function formatTime(seconds: number) {
  const formatHours = Math.floor(seconds / 3600)
  const formatMinutes = Math.floor((seconds % 3600) / 60)
  const formatSeconds = seconds % 60

  const formatHoursStr = formatHours > 0 ? `${formatHours.toString().padStart(2, "0")}時間` : ""
  const formatMinutesStr = `${formatMinutes.toString().padStart(2, "0")}分`
  const formatSecondsStr = `${formatSeconds.toString().padStart(2, "0")}秒`

  return`${formatHoursStr}${formatMinutesStr}${formatSecondsStr}`
}

console.log(formatTime(10))
console.log(formatTime(100))
console.log(formatTime(1000))
console.log(formatTime(10000))
console.log(formatTime(100000))
