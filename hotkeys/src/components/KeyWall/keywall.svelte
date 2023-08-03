<script lang="ts">
    import { programs, type Program } from "../../data/data"
    export let propPage: string;
    let program: Program | undefined
    $: program = programs.find((el) => el.name === propPage);
</script>

<div class="h-full flex">
        {#if program !== undefined}
            <div class="h-fit mx-auto flex mt-6 border-2 rounded-md border-gray-700">
                {#each program.groups as groups}
                    <div class="container bg-surface-900 mx-6 px-12 py-6">
                        <div class="flex flex-col">
                            <div class="text-3xl text-center">
                                {groups.name}
                            </div>
                            <div class="text-md text-center">
                                {groups.keystoke}
                            </div>
                        </div>

                            <dl class="list-dl flex-col">
                                {#each groups.shortcuts as shortcuts}
                                    <div>
                                        {#if groups.keystoke === 'command mode'}
                                            {#each shortcuts.keys as keys}
                                                <span class="badge bg-secondary-800 h-11 w-11">{keys}</span>
                                            {/each}
                                            {:else}
                                                {#each shortcuts.keys as keys}
                                                    <span class="badge bg-primary-800 h-11 w-11">{keys}</span>
                                                {/each}
                                        {/if}
                                        
                                        <span class="flex-auto">
                                            <dd>{shortcuts.name}</dd>
                                        </span>
                                    </div>
                                {/each}
                            </dl>
                    </div>
                {/each}
            </div>
        {/if}
</div>
