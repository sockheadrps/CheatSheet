<script lang="ts">
    import { programs, type Program } from "../../data/data"
    export let propPage: string;
    let program: Program | undefined
    $: program = programs.find((el) => el.name === propPage);
</script>

<div class="h-full flex">
        {#if program !== undefined}
        <!-- main container -->
            <div class="h-fit mx-auto flex mt-6 rounded-md border-gray-700">
                <!-- Card container -->
                {#each program.groups as groups}
                    <div class="container bg-surface-900 rounded-xl mx-6 px-12 py-6">
                        <!-- Title and mode container -->
                        <div class="flex flex-col">
                            <div class="text-3xl text-center">
                                {groups.name}
                            </div>
                            <div class="text-md text-center">
                                {groups.keystoke}
                            </div>
                        </div>
                            <!-- Shortcut group container -->
                            <dl class="list-dl flex-col">
                                {#each groups.shortcuts as shortcuts}
                                <!-- Title area container -->
                                    <div>
                                        {#if groups.keystoke === 'command mode'}
                                            <!-- keys (seperated for mode color)-->
                                            {#each shortcuts.keys as keys}
                                                <span class="badge bg-secondary-800 h-11 w-11">{keys}</span>
                                            {/each}
                                            {:else}
                                                {#each shortcuts.keys as keys}
                                                    <span class="badge bg-primary-800 h-11 w-11">{keys}</span>
                                                {/each}
                                        {/if}
                                        <!-- shortcut name / description -->
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
