import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Clipboard from 'clipboard'
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import { rules, encrypt, scrollIntoView } from '../common'

const Wrapper = styled(Container)`
  min-height: calc(100vh - 56px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    display: block;
  }
`

const PassForm = styled(Form)`
  max-width: 480px;
  width: 100%;
  height: 380px;
  padding: 15px 0;
`

export default class Home extends Component {
  state = {
    selected: 0,
    domain: '',
    length: '',
    password: '',
    modal: false,
  }

  componentDidMount() {
    this.clipboard()
    this.keyup()
    scrollIntoView(ReactDOM.findDOMNode(this.refs.passForm).querySelectorAll('input'))
  }

  render() {
    const { selected, modal } = this.state
    return (
      <Wrapper>
        <PassForm ref="passForm">
          <FormGroup>
            <Label>域名</Label>
            <Input type="select" onChange={event => this.setState({ selected: ~~event.target.value })} value={selected}>
              {rules.map((rule, index) => (
                <option value={index} key={index}>
                  {index === 0 ? rule.name : `${rule.domain} - ${rule.name}`}
                </option>
              ))}
            </Input>
          </FormGroup>
          <div style={{ display: selected === 0 ? 'block' : 'none' }}>
            <FormGroup>
              <Input type="text" onInput={event => this.setState({ domain: event.target.value })} />
            </FormGroup>
            <FormGroup>
              <Label>长度</Label>
              <Input type="number" onInput={event => this.setState({ length: event.target.value })} />
            </FormGroup>
          </div>
          <FormGroup>
            <Label>密码</Label>
            <Input
              type="password"
              autoComplete="on"
              onInput={event => this.setState({ password: event.target.value })}
            />
            {/* 当只有一个密码框时，回车会触发 form 提交，加个隐藏的 input 解决 */}
            <Input style={{display: 'none'}} />
          </FormGroup>
          <Button color="secondary" ref="submitButton" onClick={this.submitForm}>
            确定
          </Button>
        </PassForm>
        <Modal isOpen={modal} centered={true}>
          <ModalHeader>提示</ModalHeader>
          <ModalBody>密码已复制到剪贴板</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={event => this.setState({ modal: false })}>
              关闭
            </Button>
          </ModalFooter>
        </Modal>
      </Wrapper>
    )
  }

  submitForm = event => {
    if (this.encrypt()) {
      this.setState({ modal: true })
    }
  }

  encrypt() {
    const { selected, domain, length, password } = this.state
    const rule = rules[selected]
    if (!rule || !password) {
      return ''
    }
    if (selected === 0) {
      return encrypt({
        domain,
        length,
        salt: password,
      })
    }
    return encrypt({
      ...rule,
      salt: password,
    })
  }

  clipboard() {
    new Clipboard(ReactDOM.findDOMNode(this.refs.submitButton), { text: () => this.encrypt() })
  }

  keyup() {
    const handlers = {
      13: () => ReactDOM.findDOMNode(this.refs.submitButton).click(),
      27: () => this.setState({ modal: false }),
    }
    window.addEventListener('keyup', ({ keyCode }) => handlers[keyCode] && handlers[keyCode]())
  }
}
