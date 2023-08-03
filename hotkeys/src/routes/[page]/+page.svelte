<script>
    import Keywall from '../../components/KeyWall/keywall.svelte';
  
    export let data;
    console.log(data)
  </script>
  
  <Keywall propPage="{data.page}" />