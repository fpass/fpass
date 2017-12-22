<template>
  <div class="wrap">
    <div class="mu-appbar mu-paper-1">
      <div class="mu-appbar-title">
        <span>FINAL PASS</span></div>
      <div class="right">
        <a href="https://github.com/fpass/fpass/issues/new" target="_blank" class="github">
          <svg height="32" version="1.1" viewBox="0 0 16 16" width="32">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </div>
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
  import rules from '../services/rules'
  import encrypt from '../services/encrypt'

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
        new Clipboard(this.jsOk, {
          text: () => this.encrypt
        })
      },
      keyup () {
        window.addEventListener('keyup', event => {
          switch (event.keyCode) {
            case 13:
              this.jsOk.click()
              break
            case 27:
              this.dialog = ''
              break
          }
        })
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

  body {
    background: #f3f3f3;
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

  .wrap {
    width: 100%;
    max-width: 750px;
    min-width: 320px;
    padding: 0 15px;
  }

  .github {
    color: #fff;
    margin: 5px 5px 0 0;

    svg {
      fill: currentColor;
    }
  }

  .form {
    padding: 15px 0;
  }

  .field {
    padding-top: 15px;
    display: flex;
    justify-content: center;

    &:last-child {
      padding-bottom: 15px;
    }
  }

  @media screen and (max-width: 414px) {
    body {
      background: #fff;
    }

    .wrap {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }

    .form {
      box-shadow: none;
    }
  }
</style>
