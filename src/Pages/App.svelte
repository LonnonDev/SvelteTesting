<script defer src="../Scripts/App.ts"></script>

<input type="button" value="Increment" on:click={Click}/>
<input type="button" value={ChangeSystem} on:click={ChangeFrom(Representation)} class="bottomleft"/>
<h1>{CounterRepresentation(Counter)}</h1>