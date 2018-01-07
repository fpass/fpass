<template>
  <div class="wrap">
    <div class="mu-appbar">
      <div class="mu-appbar-title">
        <span>FINAL PASS</span>
      </div>
      <a href="https://github.com/fpass/fpass" target="_blank" class="github">
        <github-icon />
      </a>
    </div>
    <mu-card class="form">
      <div class="field">
        <mu-select-field v-model="ruleIndex" label="DOMAIN">
          <mu-menu-item v-for="(rule, index) in rules" :key="index" :value="index" :title="rule.domain + ' - ' + rule.name" />
        </mu-select-field>
      </div>
      <div class="field" v-show="ruleIndex === rules.length - 1">
        <mu-text-field v-model="domain" label="DOMAIN" type="text" />
      </div>
      <div class="field" v-show="ruleIndex === rules.length - 1">
        <mu-text-field v-model="length" label="LENGTH" type="number" />
      </div>
      <div class="field">
        <mu-text-field v-model="password" label="PASSWORD" type="password" />
      </div>
      <div class="field">
        <mu-raised-button class="js-ok" label="OK" :disabled="!encrypt" primary @click="clickOk" />
      </div>
    </mu-card>
    <mu-dialog :open="!!dialog" :title="dialog">
      <mu-flat-button label="OK" slot="actions" primary @click="dialog = ''" />
    </mu-dialog>
  </div>
</template>

<script>
  import Clipboard from 'clipboard'
  import GithubIcon from '../../components/github-icon'
  import rules from '../../services/rules'
  import encrypt from '../../services/encrypt'

  export default {
    asyncData () {
      return {
        rules,
        ruleIndex: '',
        password: '',
        dialog: '',
        domain: '',
        length: ''
      }
    },
    components: {
      GithubIcon
    },
    computed: {
      encrypt () {
        const rule = this.rules[this.ruleIndex]
        if (!rule || !this.password) {
          return ''
        }
        if (this.ruleIndex === this.rules.length - 1) {
          return encrypt({
            domain: this.domain,
            salt: this.password,
            length: this.length
          })
        }
        return encrypt({
          ...rule,
          salt: this.password
        })
      }
    },
    mounted () {
      this.jsOk = this.$el.querySelector('.js-ok')
      this.clipboard()
      this.keyup()
      this.scrollIntoView()
    },
    methods: {
      clipboard () {
        new Clipboard(this.jsOk, {text: () => this.encrypt})
      },
      keyup () {
        const handlers = {
          13: () => this.jsOk.click(),
          27: () => this.dialog = ''
        }
        window.addEventListener('keyup', ({keyCode}) => handlers[keyCode] && handlers[keyCode]())
      },
      scrollIntoView () {
        Array.from(this.$el.querySelectorAll('input')).forEach(input => {
          input.addEventListener('focus', () => {
            setTimeout(() => input.scrollIntoView(false), 250)
          })
        })
      },
      clickOk () {
        this.dialog = 'The password has been copied to the clipboard'
      }
    }
  }
</script>

<style lang="less">
  html,
  body,
  #__nuxt {
    height: 100%;
  }

  #__nuxt {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    min-height: 504px;
  }

  .mu-popover {
    overflow: auto;
  }

  .mu-dialog {
    max-width: 520px;
  }

  .mu-dialog-title {
    font-size: 18px;
  }

  .mu-dialog-body {
    word-break: break-all;
    word-wrap: break-word;
  }
</style>

<style lang="less" scoped>
  .wrap {
    width: 100%;
    max-width: 750px;
    min-width: 320px;
    padding: 40px 15px 0;
  }

  .github {
    margin: 3px 5px 0 0;
  }

  .mu-appbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
  }

  .form {
    padding: 15px 0;
    box-shadow: none;
  }

  .field {
    padding-top: 15px;
    display: flex;
    justify-content: center;

    &:last-child {
      padding-bottom: 15px;
    }
  }
</style>
