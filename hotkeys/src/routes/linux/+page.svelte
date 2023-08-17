<script lang="ts">
	import { linux, type Linux } from "../../data/linux";
</script>


<div class="h-full flex">
    {#if linux !== undefined}
    <!-- main container -->
        <div class="h-fit mx-auto flex mt-6 rounded-md border-gray-700">
            <!-- Card container -->
            {#each linux.groups as groups}
                <div class="container bg-surface-900 rounded-xl mx-6 px-12 py-4">
                    <!-- Title container -->
                    <div class="flex flex-col">
                        <div class="text-4xl text-center">
                            {groups.name}
                        </div>
                    </div>

                    <dl class="list-dl flex-col">
                        {#each groups.commands as commands}
                            <div class="text-3xl -mt-4">
                                <i>{commands.name}</i>
                            </div>
                        
                            <div class="flex flex-col">
                                <div class="w-full justify-start -mb-2 -mt-4">
                                    {commands.description}
                                </div>
                                {#if (commands.optionals !== undefined)}
                                    {#each commands.optionals as optionals}
                                    <div class="w-full indent-4 -mb-4">
                                        <i>{optionals.option}</i>
                                    </div>
                                    <div class="w-full indent-8">
                                        {optionals.description}
                                    </div>
                                    {/each}
                                {/if}
                            </div>
                        {/each}
                    </dl>
                </div>
            {/each}
        </div>
    {/if}
</div>

