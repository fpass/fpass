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
import rules from '../../common/rules'
import encrypt from '../../common/encrypt'
import scrollIntoView from '../../common/scrollIntoView'

const Wrap = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled(Form)`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
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
    scrollIntoView(ReactDOM.findDOMNode(this.refs.wrap).querySelectorAll('input'))
  }

  render() {
    const { selected, modal } = this.state
    return (
      <Wrap ref="wrap">
        <Box>
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
          {selected === 0 ? (
            <div>
              <FormGroup>
                <Label>域名</Label>
                <Input type="text" onInput={event => this.setState({ domain: event.target.value })} />
              </FormGroup>
              <FormGroup>
                <Label>长度</Label>
                <Input type="number" onInput={event => this.setState({ length: event.target.value })} />
              </FormGroup>
            </div>
          ) : (
            ''
          )}
          <FormGroup>
            <Label>密码</Label>
            <Input
              type="password"
              autoComplete="on"
              onInput={event => this.setState({ password: event.target.value })}
            />
          </FormGroup>
          <Button color="secondary" ref="submitForm" onClick={this.submitForm}>
            确定
          </Button>
        </Box>
        <Modal isOpen={modal} centered={true}>
          <ModalHeader>提示</ModalHeader>
          <ModalBody>密码已复制到剪贴板</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={event => this.setState({ modal: false })}>
              关闭
            </Button>
          </ModalFooter>
        </Modal>
      </Wrap>
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
    new Clipboard(ReactDOM.findDOMNode(this.refs.submitForm), { text: () => this.encrypt() })
  }

  keyup() {
    const handlers = {
      13: () => ReactDOM.findDOMNode(this.refs.submitForm).click(),
      27: () => this.setState({ modal: false }),
    }
    window.addEventListener('keyup', ({ keyCode }) => handlers[keyCode] && handlers[keyCode]())
  }
}
