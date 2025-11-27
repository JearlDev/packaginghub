<template>
  <div>
    <Header
      :logo="data?.global?.siteLogo"
      :mainMenu="data?.global?.mainMenu"
      :mainCTA="data?.global?.mainCTA"
      :phone="data?.global?.companyPhoneNumber"
      :email="data?.global?.companyEmail"
    />
    <slot />
    <ContactFooter
      :phone="data?.global?.companyPhoneNumber"
      :email="data?.global?.companyEmail"
      :address="data?.global?.address"
      :officeHours="data?.global?.officeHours"
      :socials="data?.global?.socials"
      :siteName="data?.global?.siteName"
    />
  </div>
</template>

<script setup>
//TODO: Re-add GraphQL query when CMS is ready
// const data = await GqlGlobal();
import globalData from "~/content/global.json";
const data = globalData.data;
</script>
