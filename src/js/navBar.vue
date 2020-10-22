<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li
              v-for="item in menus"
              :key="item.id"
              :class="{ active: currentItem === item.name }"
              @click="currentItem = item.name"
            >
              <router-link :to="item.route">{{ item.name }}</router-link>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li v-for="data in bardata" v-bind:key="data.id">
                  <a href="#">{{ data }}</a>
                </li>
                <!-- <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li> -->
              </ul>
            </li>
          </ul>
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
            <button type="submit" class="btn btn-default" @click="submit">
              Submit
            </button>
          </form>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
export default {
  props: ["bardata", "menus"],
  data: function () {
    return { currentItem: "Signin" };
  },
  methods: {
    submit: function () {
      $.get("demo_test.php?name=junxi&age=30", function (data, status) {
        alert("数据: " + data + "\n状态: " + status);
      });
    },
  },
  // computed: {}
};
</script>

<style lang="stylus" scoped></style>