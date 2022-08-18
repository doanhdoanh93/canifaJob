<template>
  <div class="header-submenu">
    <!-- <button @click="check()">dsfdhklfg;jk</button> -->
    <ul class="ui-menu" v-if="subMenu">
      <li class="level0" v-for="(category, index) in subMenu" :key="index">
        <router-link :to="category.url_path">{{ category.name }} </router-link>
        <div class="submenu" v-if="category.children_data">
          <div class="submenu-content">
            <div class="row">
              <div class="col-sm-14">
                <ul>
                  <li
                    v-for="(subCate, indexs) in CategoryChild(category)"
                    :key="indexs"
                  >
                    <router-link
                      :to="`/bst?link=${subCate.url_path}&category_id=${subCate.id}`"
                      tag="a"
                      v-if="subCate.include_in_menu == 1"
                      >{{ subCate.name }}</router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="col-sm-10" v-if="$route.name == 'nu'">
                <img src="../../public/assets/female-1.png" />
              </div>
              <div class="col-sm-10" v-if="$route.name == 'nam'">
                <img src="../../public/assets/male-1.png" />
              </div>
              <div class="col-sm-10" v-if="$route.name == 'beGai'">
                <img src="../../public/assets/girl.png" />
              </div>
              <div class="col-sm-10" v-if="$route.name == 'beTrai'">
                <img src="../../public/assets/boy.png" />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import modalSubMenu from "../components/modal/modalSubMenu.vue";
export default {
  //   components: { modalSubMenu },
  created() {
    this.getCategoryes();
  },
  watch: {
    $route() {
      this.getCategoryes();
    },
    // categories() {
    //   this.loadCategories();
    // },
  },
  computed: {
    ...mapGetters(["categories"]),
    subMenu() {
      if (!this.categories) return;
      let data = [
        ...this.categories?.filter(
          (e) =>
            (e?.level === 2) &
            (e?.name.toLowerCase() === this.$route.name.toLowerCase()) &
            (e?.include_in_menu === 1)
        ),
      ];
      // console.log("data: ", data);
      let childrenData = [];
      data.forEach((e) => {
        e.children_data.forEach((children) => {
          let newdata = [
            ...this.categories?.filter((el) => el.id === children.id),
          ];
          // console.log("newdata: ", newdata);
          childrenData.push(newdata[0]);
        });
      });
      // console.log("childrenData: ", childrenData);
      let menu = [...childrenData?.filter((e) => e?.include_in_menu === 1)];
      menu.sort((a, b) => a.position - b.position);
      // console.log("menu: ", menu);
      return menu;
    },
  },
  methods: {
    // ...mapActions(["loadCategories"]),
    check() {
      console.log("subMenu: ", this.subMenu);
    },
    getCategoryes() {
      this.$store.dispatch("loadCategories");
    },
    CategoryChild(category) {
      let childrenData = [];
      category.children_data.forEach((e) => {
        let newdata = [...this.categories?.filter((el) => el.id === e.id)];
        childrenData.push(newdata[0]);
      });
      let submenu = [...childrenData?.filter((e) => e?.include_in_menu === 1)];
      // console.log("submenu: ", submenu);

      return submenu;
    },
  },
};
</script>
