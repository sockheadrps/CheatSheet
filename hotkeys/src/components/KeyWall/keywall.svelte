<script lang="ts">
    import { programs } from "../../data/data"
    export let propPage: string;
</script>


<div class="h-full flex">
    {#each programs as program}
        {#if program.name === propPage}
            {#each Object.entries(program.shortcuts) as [category, shortcuts]}
                <div class="h-fit mx-auto flex justify-center items-center mt-6 border-2 rounded-md border-gray-700">
                    <div class="container bg-surface-900">
                        <div class="flex justify-center">
                            <span>{category}</span>
                        </div>
                        {#each shortcuts as shortcut}
                            <dl class="list-dl flex-col">
                                <div>
                                    {#each shortcut.keys as k}
                                        <span class="badge bg-primary-800 h-11 w-11">{k}</span>
                                    {/each}
                                    <span class="flex-auto">
                                    <dd>{shortcut.name}</dd>
                                </span>
                                </div>
                            </dl>
                        {/each}
                    </div>
                </div>
            {/each}
        {/if}
    {/each}
</div>