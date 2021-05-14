<script defer src="../Scripts/App.ts"></script>

<input type="button" value={ChangeSystem} on:click={ChangeFrom(Representation)} class="bottomleft"/>
<input type="button" value="Increment" on:click={Click}/>
<h1>{CounterRepresentation(Counter)}</h1>