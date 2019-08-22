import freeAppBot from '../media/project/free-app-bot.png';
import placefinder from '../media/project/placefinder.png';
import wordbook from '../media/project/wordbook.png';
import todolist from '../media/project/todolist.png';
import musicChart from '../media/project/music-chart.png';
/**
 * Projects Type
 */

export interface Detail {
  texts?: { text: string; link?: string }[];
  subtitle?: string;
  mediaUrls?: string[];
}

export interface Page {
  title: string;
  details?: Detail[];
}

export interface Category {
  category: Page;
  contents: Page[];
}

export type CategoryType = Category[];

/**
 * Project Data
 */

const career: CategoryType = [
  {
    category: {
      title: '(주)ESE 2016.08.01 ~ 2018.05.31',
      details: [
        {
          subtitle: 'Role.',
          texts: [
            { text: '풀스택 개발자' },
            { text: '솔루션(시설물관리) 개발 및 유지보수' },
          ],
        },
        {
          subtitle: 'Main Skills.',
          texts: [
            {
              text:
                'JPA, Hibernate, PostgreSQL, JavaScript, RESTR API, Spring, Jquery, Java, ibatis',
            },
          ],
        },
      ],
    },
    contents: [
      {
        title: 'Projects Part 1.',
        details: [
          {
            subtitle: '2016 군포 CCTV 고도화 사업 (2016.08 ~ 2016.12)',
            texts: [
              { text: '엑셀로 작성된 시설물 정보의 일괄 저장,수정 기능 개발' },
              { text: 'Mybatis부분을 일부 Hibernate로 변경' },
            ],
          },
          {
            subtitle:
              '2016 화성 공간정보 기반의 모바일 시설물관리 시스템 개발 및 유지보수 (2016.11 ~ 2018.05)',
            texts: [
              { text: '사용자의 권한에 따라 시설물 분류의 필터링 기능 개발' },
              {
                text:
                  'SSO기능 중 부서 변경된 사용자에 대한 권한 회수 기능 개발',
              },
            ],
          },
        ],
      },
      {
        title: 'Projects Part 2.',
        details: [
          {
            subtitle: '자사 솔루션 고도화 사업 (2017.05 ~ 2017.11)',
            texts: [
              { text: 'JPA, BuilderPattern, REST API 적용' },
              { text: '자사 타 솔루션과의 시설물 이벤트 연동 기능 개발' },
              { text: '시설물 Excel 정보 등록 및 수정 고도화' },
            ],
          },
          {
            subtitle:
              '2017 화성 도시안전센터 통합 관제 시스템 구축 및 유지보수 (2017.11 ~ 2018.05)',
            texts: [
              {
                text:
                  '관리중인 시설물 이벤트 발생 시, 해당 시설물 정보를 제공하는 위젯 개발',
              },
              { text: '지도 상에 행정동 별 시설물 이상 이벤트 표시 위젯 개발' },
              { text: 'OracleDB환경에서 작동 설정 변경 및 테스트' },
            ],
          },
        ],
      },
    ],
  },
];
const persnal: CategoryType = [
  {
    category: {
      title: 'Word Book',
      details: [
        {
          subtitle: 'Screenshot.',
          mediaUrls: [wordbook],
        },
      ],
    },
    contents: [
      {
        title: 'This is',
        details: [
          {
            texts: [
              {
                text:
                  'React를 이용하여 구현한 단어장 SPA며, SASS를 이용하여 스타일을 정의하였습니다.',
              },
              {
                text:
                  'Redux를 사용하여 각 DOM의 이벤트를 관리하며, 서버와 통신없이 localStorage를 사용하여 데이터를 저장하여 관리합니다.',
              },
              {
                text:
                  '단어의 등록, 수정, 삭제가 가능하도록 구현했으며, 브라우저의 speechSynthesisInstance API를 이용하여 단어의 발음을 확인 할 수있습니다.',
              },
              {
                text:
                  '한 단어에 여러개의 뜻을 등록할 수 있으며, 등록된 단어들로 테스트가 가능 한 메뉴를 구현했습니다.',
              },
              {
                text:
                  'Json 포맷으로 여러개의 단어등록을 지원하며, 예시를 제공하는 메뉴를 구현했습니다.',
              },
              {
                text:
                  '단어 등록 시, 같은 단어가 등록 되어 있는지 확인하여 해당 단어와 합치는 기능을 구현했습니다.',
              },
            ],
          },
        ],
      },
      {
        title: 'Demo & Git-hub',
        details: [
          {
            subtitle: 'Link',
            texts: [
              { text: 'Demo', link: 'https://hong-ki.github.io/word-book/' },
              {
                text: 'Git-hub',
                link: 'https://github.com/Hong-Ki/word-book',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: {
      title: 'Todo List',
      details: [
        {
          subtitle: 'Screenshot.',
          mediaUrls: [todolist],
        },
      ],
    },
    contents: [
      {
        title: 'This is',
        details: [
          {
            texts: [
              {
                text:
                  'React로 만들어진 투두리스트 관리 SPA이며, SASS로 스타일 시트를 작성하였습니다.',
              },
              {
                text:
                  'Redux로 이벤트관리를 하며, 서버와 통신없이 Local Storage로 데이터를 관리합니다.',
              },
              {
                text:
                  '투두 리스트를 등록, 수정, 삭제가 가능하도록했으며, 완료한 투두리스트를 체크할 수 있도록 구현하였습니다.',
              },
              {
                text:
                  'react-beautiful-dnd 라이브러리를 사용하여 투두리스트를 드래그하여 우선순위를 변경할 수있도록 구현하였습니다.',
              },
              {
                text:
                  'react-toast-notifications 라이브러리를 사용하여 기간이 지난 투두리스트들에 대한 toast메시지를 띄우도록 구현하였습니다.',
              },
            ],
          },
        ],
      },
      {
        title: 'Demo & Git-hub',
        details: [
          {
            subtitle: 'Link',
            texts: [
              { text: 'Demo', link: 'https://hong-ki.github.io/todo-list' },
              {
                text: 'Git-hub',
                link: 'https://github.com/Hong-Ki/todo-list',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: {
      title: 'Free App Alarm Bot',
      details: [
        {
          subtitle: 'Screenshot.',
          mediaUrls: [freeAppBot],
        },
      ],
    },
    contents: [
      {
        title: 'This is',
        details: [
          {
            texts: [
              {
                text:
                  '무료 앱 알림 봇은 Python으로 작성된 봇으로, 루리웹에 올라오는 무료앱의 정보를 크롤링하여 텔레그램에 메시지를 보내주는 기능을 합니다.',
              },

              {
                text:
                  'BeautifulSoup으로 Html을 파싱하며,  구글 Chrome 드라이버를 사용하였습니다.',
              },

              {
                text:
                  '정해진 시간에 글이 올라왔는지 확인하며, 글이 없다면 일정시간마다 체크하여 글이 올라왔을 경우 메시지를 보내도록 구현하였습니다.',
              },
            ],
          },
          {
            subtitle: 'Demo & Git-hub',
            texts: [
              {
                text: 'Git-hub',
                link: 'https://github.com/Hong-Ki/free-app-crawler',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: {
      title: 'Place Finder',
      details: [
        {
          subtitle: 'Screenshot.',
          mediaUrls: [placefinder],
        },
      ],
    },
    contents: [
      {
        title: 'This is',
        details: [
          {
            texts: [
              {
                text:
                  'React로 구현된 SPA 클라이언트와 Spring-boot로 구현된 서버로 구성된 Full-stack프로젝트입니다.',
              },
              { text: 'SASS로 스타일을 작성하였습니다.' },
              { text: ' JPA로 DB에 접근합니다.' },
              {
                text:
                  '카카오맵의 API로 키워드로 장소 검색, 인기 검색어, 최근 검색어를 볼 수 있으며, 검색된 장소를 클릭하면 지도에 위치와 상세 정보를 볼 수있도록 구현하였습니다.',
              },
              {
                text:
                  '로그인을 해야 기능을 사용할 수있도록 구현하였으며, 로그인 시 JWT를 발급하여, 요청시 마다 spring-security로 권한을 체크하여 요청을 처리합니다.',
              },
            ],
          },
          {
            subtitle: 'Demo & Git-hub',
            texts: [
              {
                text: 'Git-hub',
                link: 'https://github.com/Hong-Ki/place-finder',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: {
      title: 'Portfolio',
      details: [
        {
          subtitle: 'This page !!',
        },
      ],
    },
    contents: [
      {
        title: 'This is',
        details: [
          {
            texts: [
              {
                text:
                  'TypeScript로 작성되었으며, React로 구현된 SPA이며, SASS로 스타일을 정의하였습니다.',
              },
              { text: 'Redux로 이벤트 관리를 합니다.' },
            ],
          },
          {
            subtitle: 'Git-hub',
            texts: [
              {
                text: 'Git-hub',
                link: 'https://github.com/Hong-Ki/react-portfolio',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    category: {
      title: 'Music Chart',
      details: [
        {
          subtitle: 'Screenshots.',
          mediaUrls: [musicChart],
        },
      ],
    },
    contents: [
      {
        title: 'This is',
        details: [
          {
            texts: [
              {
                text: 'Serverless와 Django, React로 이루어진 프로젝트입니다.',
              },
              {
                text:
                  'Serverless - Javscript로 작성된 크롤러이며, AWS에 배포합니다. 기본적인 데이터 요청 API를 가지고 있습니다.',
              },
              {
                text:
                  'Django - grqphQL로 질의 하여 저장된 데이터를 주는 API서버 입니다.',
              },
              {
                text:
                  'React - TypeScript로 작성되었으며, Front단을 구성하며, SASS로 스타일을 정의하였습니다.',
              },
            ],
          },
          {
            subtitle: 'Git-hub',
            texts: [
              {
                text: 'Serverless',
                link: 'https://github.com/Hong-Ki/sls-music-chart-crawler',
              },
              {
                text: 'Django',
                link: 'https://github.com/Hong-Ki/django-music-chart-backend',
              },
              {
                text: 'React',
                link: 'https://github.com/Hong-Ki/react-music-chart-frontend',
              },
            ],
          },
        ],
      },
    ],
  },
];

const getData = (menu: 'career' | 'persnal'): CategoryType | null => {
  switch (menu) {
    case 'career':
      return career;
    case 'persnal':
      return persnal;
    default:
      return null;
  }
};

export default getData;
