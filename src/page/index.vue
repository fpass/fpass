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
        <mu-select-field v-model="ruleIndex" :label="$t('domain')">
          <mu-menu-item v-for="(rule, index) in rules" :key="index" :value="index" :title="rule.domain + ' - ' + rule.name" />
        </mu-select-field>
      </div>
      <div class="field" v-show="ruleIndex === rules.length - 1">
        <mu-text-field v-model="domain" :label="$t('domain')" type="text" />
      </div>
      <div class="field" v-show="ruleIndex === rules.length - 1">
        <mu-text-field v-model="length" :label="$t('length')" type="number" />
      </div>
      <div class="field">
        <mu-text-field v-model="password" :label="$t('password')" type="password" />
      </div>
      <div class="field">
        <mu-raised-button class="js-ok" :label="$t('confirm')" :disabled="!encrypt" primary @click="clickOk" />
      </div>
    </mu-card>
    <mu-dialog :open="!!dialog" :title="dialog">
      <mu-flat-button :label="$t('confirm')" slot="actions" primary @click="dialog = ''" />
    </mu-dialog>
  </div>
</template>

<script>
  import Clipboard from 'clipboard'
  import GithubIcon from '../component/github-icon'
  import rules from '../service/rules'
  import encrypt from '../service/encrypt'

  export default {
    data () {
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
        this.dialog = this.$t('copied')
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrap {
    height: 100%;
    min-width: 320px;
    padding: 40px 15px 0;
    min-height: 504px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    max-width: 750px;
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
