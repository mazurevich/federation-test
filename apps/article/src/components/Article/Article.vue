<script>
export default {
  data() {
    return {
      content: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices risus vitae urna condimentum tincidunt. Curabitur vehicula a lacus in varius. Quisque laoreet nec justo a ultricies. Praesent eleifend, ipsum tincidunt ultrices tempor, purus nisi venenatis turpis, ac rutrum nulla eros sed mi. Donec luctus dapibus ipsum molestie pharetra. Etiam commodo non enim non laoreet. Vivamus nec tortor eu arcu sollicitudin commodo a non erat. Mauris in odio nec elit egestas auctor. Duis sit amet orci nisi. Suspendisse sed nulla eu velit vestibulum lobortis id at arcu. Sed non sodales turpis. Aliquam erat volutpat. Quisque tempor, metus eget laoreet maximus, orci lacus hendrerit massa, eu dapibus dui erat vitae velit.",
        "Nam imperdiet elit sit amet mollis pharetra. Cras sollicitudin, justo sed tempus rhoncus, purus mi vestibulum dolor, et tincidunt magna risus vel tortor. Suspendisse potenti. Nam accumsan ullamcorper tempor. Curabitur consectetur magna eu tincidunt ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eleifend fermentum ante sed porta. Pellentesque pharetra nec nunc sed dictum. Nullam vehicula augue quam, vitae ultrices massa facilisis eu. In sagittis lobortis ullamcorper. Mauris sapien augue, scelerisque sit amet mi a, interdum pellentesque erat. Donec nec congue dui. In feugiat dui eu sodales convallis. Curabitur vel nisl est. Etiam iaculis arcu elit, in bibendum purus ultrices quis.",
        "Integer ut sem porta, pretium turpis non, venenatis magna. Maecenas rutrum ligula nisi. Suspendisse sollicitudin justo efficitur fermentum pellentesque. Aenean in rhoncus massa, id ullamcorper dolor. Praesent lobortis egestas ante, sed egestas nisi placerat sed. Cras a leo ut metus aliquet ultrices id sit amet elit. Fusce tristique pulvinar eros et pretium. Praesent vestibulum facilisis lectus ut feugiat. Vivamus in sem nunc. Fusce bibendum, tellus ut tincidunt gravida, nulla lorem porttitor dolor, non accumsan risus erat id mauris. In placerat finibus orci faucibus scelerisque. Sed sollicitudin enim enim, a iaculis nisi viverra nec. Etiam volutpat urna ligula, cursus auctor dui pretium non. Aliquam magna lorem, gravida sed pretium at, aliquet nec odio. Nullam rutrum porta lacinia. Morbi blandit leo gravida arcu dignissim lobortis.",
        "In auctor nunc a massa finibus, a ultricies erat hendrerit. Integer pharetra, justo id placerat pellentesque, diam tellus vulputate est, vitae aliquam quam arcu at odio. Nulla facilisi. Quisque et laoreet tellus. Nulla suscipit dapibus urna, ultricies ultrices ipsum tempor nec. Nunc iaculis tortor rutrum sodales blandit. Donec ultricies tempor nunc, eu feugiat nulla varius sit amet. Nam eget nunc sed sapien mattis ultricies in sed leo. Nunc finibus nulla id quam dignissim facilisis. Donec sagittis ultrices maximus. Sed pellentesque laoreet justo, vel lobortis ex hendrerit non. Phasellus facilisis pharetra quam, vel porta orci elementum ut. Fusce in tempor purus. Morbi fermentum tristique libero, at congue dui pharetra ut. Phasellus quam urna, viverra sit amet diam ut, tincidunt vulputate sem. Nulla ut leo quis neque luctus molestie.",
        "Nulla tincidunt eu mi elementum sagittis. Proin non mi sit amet neque elementum pellentesque. Nam vitae orci lacinia, sagittis nulla ut, auctor nisi. Nulla quis arcu augue. Ut libero tortor, viverra a finibus vehicula, sodales venenatis mi. Aenean at lorem a sem vestibulum luctus. Phasellus varius ligula nec tincidunt convallis. Vivamus imperdiet elit quam. Maecenas tincidunt aliquam laoreet.",
      ],
    };
  }
}
</script>

<template>
  <main class="article">
    <div class="content" v-for="(paragraph, index) in content" :key="index">
      <p class="paragraph">{{paragraph}}</p>
    </div>
  </main>
</template>

<style scoped>
  .article {
    display: flex;
    flex-direction: column;
    padding: 60px 200px;
  }
  .content {
    font-size: 18px;
    line-height: 28px;
  }
  .paragraph {
    text-align: justify;
  }
  .paragraph:not(:last-child) {
    margin-bottom: 10px;
  }
</style>
