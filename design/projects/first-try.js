// First-try series of the §4.1 leaderboard, from numpy-to-rust-eval/results/data.json (models[].ft).
// Labels are shortened for the thumbnail. Rates retain the precision of the source.
const firstTry = [
  ["GPT-6.1 Sol", 1.0], // gpt-6.1-sol
  ["Opus 5.5", 1.0], // claude-opus-5-5
  ["Haiku 5.5", 0.9829059829059829], // claude-haiku-5-5
  ["Sonnet 5.5", 0.9743589743589743], // claude-sonnet-5-5
  ["Gemini Argon", 0.9316239316239316], // gemini-4-argon
  ["DeepSeek Flash", 0.9230769230769231], // deepseek-v4p1-flash-1017
  ["GPT-6 Luna", 0.9145299145299145], // gpt-6-luna
  ["Gemini Flash", 0.8974358974358975], // gemini-3.8-flash
  ["Muse Spark", 0.8888888888888888], // muse-spark-open
  ["Kimi K3", 0.8803418803418803], // kimi-k3
  ["Ember-1", 0.8803418803418803], // ember-1
  ["GLM 5.3", 0.8034188034188035], // glm-5p3
  ["Qwen 3.8 Max", 0.7521367521367521], // qwen3p8-max
  ["MiniMax M3", 0.6666666666666666], // minimax-m3
  ["GLM 5.3 Flash", 0.6495726495726496], // glm-5p3-flash
  ["Inkling", 0.603448275862069], // inkling
  ["Nemotron", 0.3076923076923077], // nemotron-lightning-3p5-30b-a3b
];

const chart = document.querySelector(".chart");
const columnTemplate = document.querySelector("#chart-column");
const rowTemplate = document.querySelector("#chart-row");

for (const group of [firstTry.slice(0, 9), firstTry.slice(9)]) {
  const column = columnTemplate.content.firstElementChild.cloneNode(true);
  for (const [label, rate] of group) {
    const row = rowTemplate.content.firstElementChild.cloneNode(true);
    row.querySelector(".model").textContent = label;
    row.querySelector(".bar").style.width = `${rate * 100}%`;
    column.append(row);
  }
  chart.append(column);
}
