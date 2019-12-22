---
title: react - lifecycle
date: "2019-12-20T18:24:17"
template: "post"
draft: false
slug: "/posts/react-lifecycle"
category: "terminal"
description: "react - lifecycle"
tags:
  - "terminal"
  - "linux"
---

# 1. 라이프 싸이클 메서드
라이프 싸이클 메서드는 클래스형 컴포넌트에만 사용할 수 있는데, 이게 바로 클래스형 컴포넌트를 사용하는 이유로 생각된다.


# 2. getDerivedStateFromProps
props로 받아온 값을 state에 동기화 시킬때 사용

# 3. componentDidMount
첫 렌더링 마친 후 실행

# 4. shouldComponentUpdate 메서드
props 또는 state를 변경했을 때, 리렌더링 여부 지정하는 메서드이며 프로젝트 성능 최적화할 때 사용

# 5. getSnapshotBeforeUpdate 
render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출

# 6. componentDidUpdate 
리렌더링 완료한 후 실행되는 메서드
함수내부에서 prevProps/prevState로 상태 확인 가능
getSnapshotBeforeUpdate 함수 다음 호출되므로 이 함수로 부터 return 값 전달 받을 수 있음

# 7. componentWillUnmount
컴포넌트를 DOM에서 제거할 때 실행, componentDisMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM을 제거 해줘야함

# 8. componentDisCatch 메서드
컴포넌트 렌더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 보여줄 떄 사용

```javascript
import React, { Component } from 'react';

class LifeCycleSample extends Component {

    state = {
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props){
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');

        if(nextProps.color !== prevState.color){
            return { color: nextProps.color };
        }
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log('should component update', nextProps, nextState);

        return nextState.number % 10 !== 4;

    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState
        (
            {
                number: this.state.number + 1

            }

        );

    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('getSnapshotBeforeUpdate');
        
        if( prevProps.color !== this.props.color)
        {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDisUpdate(prevProps, prevState, snapshot)
    {

        console.log('componentDidUpdate', prevProps, prevState);

        if(snapshot)
        {
            console.log('color right before: ', snapshot);
        }

    }

    render() {
        const style = {
            color: this.props.color
        };

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color} </p>

                <button onClick={this.handleClick}>더하기</button>

            </div>
        );
    }
}

export default LifeCycleSample;



```
참고
> 리액트를 다루는 기술, 김민준(VELOPERT)저