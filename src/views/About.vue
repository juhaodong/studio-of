<template>
  <div class="mobileWhite">
    <page-title>
      ABOUT
    </page-title>

    <template v-if="this.$i18n.locale==='zh'">
      <text-block class="text-about">
        <p>
          Studio OF（即“为”工作室）， 2019年组建于德国柏林，以视觉设计为核心，工作室成员由平面设计师，插画师，材料表面设计师和建筑设计师组成。<br>
        </p>
        <p>
          Studio
          OF旨在通过高效舒适的沟通交流，严谨顺畅的逻辑分析，旺盛积极的劳动创造，以及独立前卫的美学判断。提供品牌设计、视觉形象识别、产品包装、用户界面、印刷品、空间以及展会设计，同时为中国企业走向海外提供形象策略服务。<br>
        </p>
      </text-block>
      <text-block class="mt-120">
        <p>
          找到我们<br>
          Instagram: <a href="https://www.instagram.com/designstudio_of/">@designstudio_of</a><br>
          Behance: <a href="https://www.behance.net/studioof">@Studio Of</a>
        </p>
      </text-block>
      <text-block class="mt-120">
        <p>
          电邮<br>
          info@studioof.net
        </p>
      </text-block>
    </template>
    <template v-if="this.$i18n.locale==='en'">
      <text-block class="text-about">
        <p>
          Studio OF is a visual design studio based in Berlin, Germany, and founded in 2019. Our team is made up of
          graphic designers, illustrators, surface designers, and architects, working collaboratively to offer
          innovative and cross-cultural design solutions.
        </p>
        <p>
          Studio OF offers service with efficient and comfortable communication in English, German and Mandarin,
          rigorous research and analysis, and independent, avant-garde aesthetic solutions.
        </p>
        <p>
          Our design services include branding, visual identity, user interface, print design, packaging, exhibition
          concepts, and spatial layout. We also provide profile strategy services for Chinese companies presenting
          overseas.
        </p>
      </text-block>
      <text-block class="mt-120">
        <p>
          Follow us<br>
          Instagram: <a href="https://www.instagram.com/designstudio_of/">@designstudio_of</a><br>
          Behance: <a href="https://www.behance.net/studioof">@Studio Of</a>
        </p>
      </text-block>
      <text-block class="mt-120">
        <p>
          Email<br>
          info@studioof.net
        </p>
      </text-block>
    </template>
  </div>
</template>
<script>
    import TextBlock from "@/components/TextBlock";
    import PageTitle from "@/components/PageTitle";

    export default {
        components: {PageTitle, TextBlock}
    }
</script>
<style scoped lang="scss">

  .mt-120 {
    margin-top: 120px;
  }

  .text-about {
    margin-top: 213px
  }

  @media only screen and(max-width: 600px) {
    .text-about {
      width: 100%;
      margin-top: 0;
    }
  }
</style>

