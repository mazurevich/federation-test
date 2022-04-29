<script>
  export let onNavigate = () => null

  const handleLinkClick = e => {
    e.preventDefault()
    onNavigate()
  }
</script>

<style>
    .widget {
        border: 1px solid #eee;
        border-radius: 12px;
        background: #eee;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0px 0px 10px #555;
    }
    .widget-hero {
        background: url("https://placekitten.com/200/100") no-repeat 50% 50%;
        background-size: cover;
        height: 50%;
        flex-shrink: 0;
    }
    .preview-text {
        padding: 8px;
        flex-grow: 1;
        overflow: hidden;
    }
    .button-section {
        min-height: 40px;
        justify-content: space-between;
        text-align: end;
    }
    .read-more-btn {
        appearance: none;
        border: 0;
        font-size: 16px;
        line-height: 16px;
        color: #0693b9;
        cursor: pointer;
        padding: 8px 16px;
    }
</style>

<div class="widget">
  <a href="#" class="widget-hero" on:click={handleLinkClick}>
  </a>
  <span class="preview-text">Lorem ipsum dolor sit amet, Autem, consectetur!</span>
  <div class="button-section">
    <button class="read-more-btn" on:click={onNavigate}>Read More</button>
  </div>
</div>
