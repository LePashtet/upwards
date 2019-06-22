<template>
  <div class="menu-wrp">
    <div class="menu_header">
      <p>Settings</p>
    </div>
    <div class="menu_content">
      <router-link
        @click.native="click(key)"
        v-bind:style="{ color: styles[key].activeColor, borderRadius: styles[key].radius+'px' , backgroundColor:styles[key].color, lineHeight:styles[key].height+'px' }"
        class="menu_content_cell" v-for="(item,key) in settings" :to="item.route">{{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'settings_menu',
  data() {
    return {
      settings: [{ name: 'Basic Info', route: '/myaccount/settings/info' },
        { name: 'Personalization', route: '/myaccount/settings/personalization' },
        { name: 'Security', route: '/myaccount/settings/secure' },
        { name: 'Privacy', route: '/myaccount/settings/privacy' },
        { name: 'Notification', route: '/myaccount/settings/notifications' },
        { name: 'Blacklist', route: '/myaccount/settings/blacklist' }],
      styles: [
        {
          activeColor: '', fontSize: '', radius: '', color: '', height: '',
        },
        {
          activeColor: '', fontSize: '', radius: '', color: '', height: '',
        },
        {
          activeColor: '', fontSize: '', radius: '', color: '', height: '',
        },
        {
          activeColor: '', fontSize: '', radius: '', color: '', height: '',
        },
        {
          activeColor: '', fontSize: '', radius: '', color: '', height: '',
        },
        {
          activeColor: '', fontSize: '', radius: '', color: '', height: '',
        },
      ],
    };
  },
  methods: {
    click(key) {
      for (let i = 0; i < this.styles.length; i++) {
        if (i === key) {
          this.styles[key].activeColor = 'white';
          this.styles[key].fontSize = 30;
          this.styles[key].radius = 43;
          this.styles[key].color = '#0087cb';
          this.styles[key].height = 40;
        } else {
          this.styles[i].activeColor = '';
          this.styles[i].fontSize = '';
          this.styles[i].radius = '';
          this.styles[i].color = '';
          this.styles[i].height = '';
        }
      }
    },
  },
  mounted() {
    if (this.$route.path === '/myaccount/settings/info') {
      this.click(0);
    } else if (this.$route.path === '/myaccount/settings/personalization') {
      this.click(1);
    } else if (this.$route.path === '/myaccount/settings/secure') {
      this.click(2);
    } else if (this.$route.path === '/myaccount/settings/privacy') {
      this.click(3);
    } else if (this.$route.path === '/myaccount/settings/notifications') {
      this.click(4);
    } else if (this.$route.path === '/myaccount/settings/blacklist') {
      this.click(5);
    }
  },
};
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #595959;
  }
  .menu-wrp {
    position: inherit ;
    width: max-content;
    height: max-content;
  }

  .menu_header {
    font-family: "Open Sans", sans-serif;
    font-size: 40px;
    font-weight: 700;
    margin: 0 0 20px 0;
  }

  .menu_content {
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
  }

  .menu_content .menu_content_cell {
    margin: 0 0 20px 0;
    width: max-content;
    padding: 5px;
  }
</style>
