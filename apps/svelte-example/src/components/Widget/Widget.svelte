<script>
  import oil from './images/oil.png'
  import factory from './images/factory.png'
  import peoples from './images/peoples.png'

  const widgets = [
    {
      heroImg: oil,
      title: 'ADNOC Announces Record $6 Billion Investments to Enable Drilling Growth Digital andareallylongending',
      date: '1 Day Ago'
    }, {
      heroImg: factory,
      title: 'Abu Dhabi National Oil Company (“ADNOC”) Announced Today, That it Has andareallylongending',
      date: '1 Day Ago'
    }, {
      heroImg: peoples,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, nihil',
      date: '1 Day Ago'
    }
  ]

  export let onNavigate = () => null
  export let variant = 0

  const {heroImg, title, date} = widgets[variant]

  const handleLinkClick = e => {
    e.preventDefault()
    onNavigate()
  }
</script>
<style>
    .widget {
        background: #FFFFFF;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .hero-image {
        display: block;
        background-size: cover;
        height: 40%;
        flex-shrink: 0;
        cursor: pointer;
        flex-grow: 4;
    }

    .main {
        padding: 16px;
        display: flex;
        flex-grow: 6;
        flex-direction: column;
    }

    .tags {
        display: flex;
        justify-content: space-between;
    }

    .tag {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 8px 2px;
        border-radius: 4px;
        margin-right: 8px;
        font-family: 'ADNOC Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        /* identical to box height, or 129% */
        text-align: center;
    }

    .tag-green {
        background: #00B0B9;
        color: #fff
    }
    .content {
        flex-grow: 1;
    }
    .title {
        display: block;
        margin: 16px 0;
        text-decoration: none;
        color: #455664;
        font-family: 'ADNOC Sans', sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box !important;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
        flex-grow: 1;
    }
    .title:hover {
        text-decoration: underline;
    }

    .date {
        font-family: 'ADNOC Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        /* identical to box height, or 114% */

        letter-spacing: 0.01em;

        /* Typography/Light UI/Body */

        color: #667593;
    }
</style>
<div class="widget">
  <a on:click={handleLinkClick} href="#" class="hero-image" style="background: url({heroImg}) no-repeat 50% 50%;">
  </a>
  <div class="main">
    <div class="tags">
      <div class="tag tag-green">
        ADNOC Drilling
      </div>

    </div>
    <div class="content">
      <a on:click={handleLinkClick} class="title" href="#">{title}</a>
    </div>
    <div class="date">
      <span>{date}</span>
    </div>

  </div>
</div>

<!--<div class="widget">-->
<!--  <a href="#" class="widget-hero" on:click={handleLinkClick}>-->
<!--  </a>-->
<!--  <span class="preview-text">Lorem ipsum dolor sit amet, Autem, consectetur!</span>-->
<!--  <div class="button-section">-->
<!--    <button class="read-more-btn" on:click={onNavigate}>Read More</button>-->
<!--  </div>-->
<!--</div>-->
