import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from '../modules/index';
import { actionCreators as pagesActions } from '../modules/actions/pages';
import { List } from 'immutable';

import Main from '../components/Main/Main';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';
import getData from '../common/ProjectsData';
import Contact from '../components/Contact/Contact';
import Thanks from '../components/Thanks/Thanks';

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
  scroll = async (element: HTMLElement | null) => {
    if (element) {
      await element.scrollIntoView(true);
    }
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.current !== this.props.current) {
      const next = document.getElementById(this.props.current);
      if (next) {
        this.setState({ scrollDirection: 'STOP' });
        this.scroll(next);
      }
    }
  }

  onTouch = {};

  onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const direction = e.deltaY < 0 ? 'UP' : 'DOWN';
    this.setState({ scrollDirection: direction });
  };

  onScroll = {
    touch: (e: React.UIEvent<HTMLDivElement>) => {
      const { current, next, previous, PagesActions } = this.props;
      const currentPage = document.getElementById(current);

      if (currentPage) {
        const { top, height } = currentPage.getBoundingClientRect();
        const bound = height / 6;
        if (0 > top + bound) {
          this.setState({ scrollDirection: 'DOWN' });
          PagesActions.setMenu(next);
        } else if (top > height - bound) {
          this.setState({ scrollDirection: 'UP' });
          PagesActions.setMenu(previous);
        }
      }
    },
    default: (e: React.UIEvent<HTMLDivElement>) => {
      e.stopPropagation();
      const { scrollDirection } = this.state;
      const { current, previous, next, PagesActions } = this.props;
      const currentPage = document.getElementById(current);

      /* page범위 check */
      if (currentPage) {
        const { top } = currentPage.getBoundingClientRect();
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
    },
  };

  render() {
    const { onWheel, onScroll } = this;
    const { current } = this.props;
    const has_touch =
      'ontouchstart' in document.documentElement ||
      window.navigator.msPointerEnabled
        ? true
        : false;

    return (
      <div
        className={'wrapper'}
        onWheel={has_touch ? () => {} : onWheel}
        onScroll={has_touch ? onScroll.touch : onScroll.default}
      >
        <Main id={'HOME'} current={current} />
        <AboutMe id={'ABOUT ME'} current={current} />
        <Projects
          id={'PROJECTS-CAREER'}
          current={current}
          data={getData('career')}
          backgroundText={['PROJECTS', 'IN', 'CAREER']}
        />
        <Projects
          id={'PROJECTS-PERSNAL'}
          current={current}
          data={getData('persnal')}
          backgroundText={['PERSNAL', 'PROJECTS']}
        />
        <Contact id={'CONTACT'} current={current} />
        <Thanks id={'THANKS'} current={current} />
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
