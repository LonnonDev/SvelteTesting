<script defer src="../Scripts/App.ts"></script>
<link rel="stylesheet" href="stylesheets/app.css">

<input type="button" value={ChangeSystem} on:click={ChangeFrom(Representation)} class="bottomleft"/>
<input type="button" value="Increment" on:click={Click}/>
<h1 class="whitetext" id="CounterDisplay">0</h1>
<div id="cpu">
	<div>
		<p>CPU</p>
	</div>
</div>