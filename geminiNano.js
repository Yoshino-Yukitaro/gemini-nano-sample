document.addEventListener('DOMContentLoaded', async () => {

  if (!window.ai) {
    document.getElementById('gemini-form').style.display = 'none';
    document.getElementById('output').innerHTML = 'このブラウザでは組み込みaiを使えないよ。';
    return;
  }

  const canCreate = (await window.ai.assistant.capabilities()).available;

  if (canCreate === 'no') {
    document.getElementById('gemini-form').style.display = 'none';
    document.getElementById('output').innerHTML = 'このchromeではgeminiを使えないよ。';
    return;
  }

  if (canCreate === 'after-download') {
    document.getElementById('gemini-form').style.display = 'none';
    document.getElementById('output').innerHTML = 'geminiを使うためには、AIをダウンロードしてください。';
    return;
  }

  if (canCreate === 'readily') {
    const formElement = document.getElementById('gemini-form');
    const outputElement = document.getElementById('output');

    formElement.addEventListener('submit', async (event) => {
      event.preventDefault();

      const inputElement = document.getElementById('gemini-input');
      const input = inputElement.value;

      if (!input) {
        return;
      }

      const userInputEl = document.createElement('p').innerHTML = `ユーザー: ${input}`;
      const aiThinkEl = document.createElement('p').innerHTML = "gemini: 考え中...";
      outputElement.append(userInputEl);
      outputElement.append(aiThinkEl);

      const session = await ai.assistant.create();
      const result = await session.prompt(input);

      const aiResponseEl = document.createElement('p').innerHTML = `gemini: ${result}`;
      outputElement.lastChild.replaceWith(aiResponseEl);
    });
    return;
  }

  document.getElementById('gemini-form').style.display = 'none';
  document.getElementById('output').innerHTML = 'なんか知らんけどgeminiを使えないよ。';


} )