<h1>Mario Kart.JS 🏁</h1>

<p>Welcome to <b>Mario Kart.JS</b>, a wild race simulator where legendary racers from the Mushroom Kingdom battle it out on the track — all powered by JavaScript and Node.js magic!

What started as a coding challenge turned into a high-speed adventure! This project was developed as part of the <b>Mobile Developer Bootcamp</b> by [DIO](https://www.dio.me), inspired by the original race logic shared by professor <b>Felipão</b>. Now it’s your turn to jump in and see who crosses the finish line first!</p>

---

  <table>
        <tr>
            <td>
                <img src="./img/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>🎯 Goal</b>
                <p>Mario Kart is a beloved racing game series created by Nintendo. Now, we’re bringing a piece of that fun into the JavaScript world. 

Let's simulate an epic race between two players using pure logic, a dash of luck, and a whole lot of Mushroom Kingdom charm! 🍄✨
</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./img/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 4</p>
                <p>Maneuver: 3</p>
                <p>Power: 3</p>
            </td>
                        <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./img/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Maneuver: 4</p>
                <p>Power: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./img/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 3</p>
                <p>Maneuver: 4</p>
                <p>Power: 2</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./img/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Maneuver: 4</p>
                <p>Power: 3</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./img/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 5</p>
                <p>Maneuver: 2</p>
                <p>Power: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./img/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Speed: 2</p>
                <p>Maneuver: 2</p>
                <p>Power: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Rules & Mechanics</h3>

<p>Let’s break down how this racing madness works:</p>

<b>👥 Racers</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">The computer must receive <b>2 racers</b>, each represented as an <b>object inside an array</b> with specific attributes.</label>

<h4>🏎️ Tracks</h4>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">The race will take place on a <b>randomly selected track</b>, made up of <b>5 rounds</b>.</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">For <b>each round</b>, a <b>random track</b> is drawn. It can be <b>Straight</b>, <b>Curve</b>, or <b>Battle</b>.</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item"><b>➡️ Straight:</b> both racers roll a 6-sided dice. Each adds their <b>Speed</b> attribute to the roll. The highest total <b>earns 1 point</b>.</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item"><b>🔄 Curve:</b> both racers roll a 6-sided dice. Each adds their <b>Maneuverability</b> attribute to the roll. The highest total <b>earns 1 point</b>.</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item"><b>⚔️ Battle:</b> both racers roll a 6-sided dice. Each adds their <b>Power</b> attribute to the roll. The <b>loser loses 1 point</b>.</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Negative scores are not allowed (below 0 points)</label></li>
    </ul>
  </li>
</ul>


<h4>🏆 Victory Conditions</h4>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">After 5 rounds, the racer with <b>more points</b> takes the trophy!</label>

---

<br>

<p>Now it’s time to start your engines and see which racer has what it takes to become the <b>champion of Mario Kart.JS</b>!

Ready, set... <b>code!</b> 

<h2>🚀 Installation & Execution</h2>

<p>Follow the steps below to clone this project and run the race on your local machine:</p>

<h3>📥 1. Clone the repository</h3>
<pre><code>
git clone https://github.com/naty-c/mario-kart-simulator.git
cd mario-kart-simulator
</code></pre>

<h3>📦 2. Install Node.js dependencies</h3>
<p>Make sure you have Node.js installed. Then, run:</p>
<pre><code>
npm install
</code></pre>

<h3>⚙️ 3. Initialize the project (if needed)</h3>
<p>This step is only required if you haven’t created a <code>package.json</code> yet:</p>
<pre><code>
npm init -y
</code></pre>

<h3>▶️ 4. Start the race!</h3>
<p>Run the following command to begin the challenge:</p>
<pre><code>npm start</code></pre>
<p>Or run directly:</p>
<pre><code>node src/index.js</code></pre>
