<script lang="ts" setup>
const content = `<h3>The three greatest things you learn from traveling</h3>
<p><br data-cke-filler="true"></p>
<p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p>
<p><br data-cke-filler="true"></p>

<h4>Appreciation of diversity</h4>
<p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>
<p><br data-cke-filler="true"></p>
<p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist. But when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p>
<p><br data-cke-filler="true"></p>
<ul>
    <li><b>•</b> buy the ticket</li>
    <li><i><b>•</b> start your adventure</i></li>
</ul>`;
const editorId = "classic-editor";
</script>

<template>
  <div
    class="px-4 py-3 mb-4 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20 break-words"
  >
    Notes:
    <a
      href="https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html"
      class="font-medium underline"
      >https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html</a
    >
    more details
  </div>
  <TCard title="Classic Ckeditor">
    <div class="ckeditor-wrapper">
      <div :id="editorId"></div>
      <TCkEditor :id="editorId" :content="content" />
    </div>
  </TCard>
</template>
