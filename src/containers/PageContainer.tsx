import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from '../modules/index';
import { actionCreators as pagesActions } from '../modules/actions/pages';
import { List, Record } from 'immutable';

import Main from '../components/Main/Main';
import AboutMe from '../components/AboutMe/AboutMe';
import Page from '../components/Page/Page';
import { async } from 'q';
interface Props {
  menus: List<string>;
  previous: string;
  current: string;
  next: string;
  PagesActions: typeof pagesActions;
}

interface State {
  scrollDirection: 'UP' | 'DOWN' | 'STOP';
}

class PageContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { scrollDirection: 'STOP' };
  }

  divRef = createRef<HTMLDivElement>();

  scroll = async (element: HTMLElement) => {
    const { current } = this.divRef;
    if (current) {
      await element.scrollIntoView(true);
    }
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.current !== this.props.current) {
      const next = document.getElementById(this.props.current);
      if (next) {
        this.setState({ scrollDirection: 'STOP' });
        const result = this.scroll(next);
      }
    }
  }

  onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const direction = e.deltaY < 0 ? 'UP' : 'DOWN';
    this.setState({ scrollDirection: direction });
  };

  onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const {
      currentTarget: { scrollTop },
    } = e;
    const { scrollDirection } = this.state;
    const { current, previous, next, PagesActions } = this.props;
    const currentPage = document.getElementById(current);

    /* page범위 check */
    if (currentPage) {
      const { height, top } = currentPage.getBoundingClientRect();
      const bound = 20;

      /* animation중 이벤트 예외 */
      if (
        (scrollDirection === 'DOWN' && top > 0) ||
        (scrollDirection === 'UP' && top < 0)
      ) {
        currentPage.scrollIntoView();
        this.setState({ scrollDirection: 'STOP' });
        return;
      }

      let move = current;
      if (top + bound < 0 && next !== '' && scrollDirection === 'DOWN') {
        move = next;
      }
      if (top > bound && previous !== '' && scrollDirection === 'UP') {
        move = previous;
      }

      PagesActions.setMenu(move);

      /*console.log('direction', scrollDirection);
      console.log('top : ' + top);
      console.log('height : ' + height);
      console.log('bound : ' + bound);
      console.log('scrollTop : ' + scrollTop);*/
    }
  };

  render() {
    const { onWheel, onScroll, divRef } = this;
    const { current } = this.props;
    return (
      <div
        className={'wrapper'}
        ref={divRef}
        onWheel={onWheel}
        onScroll={onScroll}
      >
        <Main id={'HOME'} current={current} />
        <AboutMe id={'ABOUT ME'} current={current} />
        <Page id={'TEST'} backgroundText={['TEST']} current={current}>
          test
        </Page>
      </div>
    );
  }
}

export default connect(
  ({ pages }: StoreState) => ({
    menus: pages.get('menus'),
    previous: pages.get('previous'),
    current: pages.get('current'),
    next: pages.get('next'),
  }),
  dispatch => ({
    PagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(PageContainer);
