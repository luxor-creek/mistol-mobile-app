import svgPaths from "./svg-lmcdz0y0r7";

function Logo1() {
  return (
    <div className="absolute left-[17.5px] size-[64px] top-[17px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Logo">
          <circle cx="32" cy="32" fill="var(--fill-0, #1F2121)" fillOpacity="0.2" id="Ellipse 4" r="32" />
          <path d={svgPaths.p3c9b5200} fill="var(--fill-0, #1F2121)" fillOpacity="0.2" id="Ellipse 5" />
          <path d={svgPaths.p193725c0} fill="var(--fill-0, #1F2121)" id="Ellipse 6" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[#daea69] overflow-clip relative rounded-[387px] shrink-0 size-[98px]" data-name="Logo">
      <Logo1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-end leading-[0] relative shrink-0 text-center w-full" data-name="Text">
      <div className="flex flex-col font-['Rethink_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1f2121] text-[22px] tracking-[-0.22px] whitespace-nowrap">
        <p className="leading-[1.3]">Chappy</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#a8b0b0] text-[16px] tracking-[-0.16px] w-[min-content]">
        <p className="leading-[1.32]">Version 1.5.7</p>
      </div>
    </div>
  );
}

function AppName() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="App Name">
      <Logo />
      <Text />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[10px] items-start leading-[0] relative shrink-0 text-[#595e5e] text-[16px] tracking-[-0.16px] w-full" data-name="Description">
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.32]">Chappy is an AI-powered chatbot app designed to provide users with engaging, intelligent, and personalized conversations. Whether you’re looking for help with a task, seeking advice, or simply wanting to chat, Chappy is always ready to assist.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <p className="leading-[1.32]">{` By using advanced machine learning algorithms, it tailors its responses based on your interactions, ensuring that every conversation feels more natural and relevant. With Chappy, you can explore a wide range of topics, from everyday queries to more complex challenges, all while enjoying a friendly and intuitive experience.`}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[16px] top-[118px] w-[343px]" data-name="About">
      <AppName />
      <Description />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex gap-[8px] h-[34px] items-center justify-center overflow-clip p-[12px] relative rounded-[12px] shrink-0 w-[35px]" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fi:arrow-left">
          <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-1px_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
                <path d="M15 1H1" id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
            <div className="absolute inset-[-7.14%_-14.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 16">
                <path d="M8 15L1 8L8 1" id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Rethink_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#1f2121] text-[20px] text-center tracking-[-0.2px]">
        <p className="leading-[1.3]">About App</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center opacity-0 overflow-clip p-[12px] relative rounded-[12px] shrink-0 size-[34px]" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fi:clock">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                <path d={svgPaths.pb60700} id="Vector" stroke="var(--stroke-0, #A8B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00022 10.0002">
                <path d="M1 1V7L5 9" id="Vector" stroke="var(--stroke-0, #A8B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomSystemBar() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[34px] left-1/2 w-[375px]" data-name="Bottom System Bar">
      <div className="-translate-x-1/2 absolute bg-[#1f2121] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[19.67px] top-[19.33px] w-[66.662px]" data-name="Right Side">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6615 11.3358">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p3ecf1600} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #1F2121)" />
            <path d={svgPaths.p3946e280} fill="var(--fill-0, #1F2121)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p14f3dc80} fill="var(--fill-0, #1F2121)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p1939be00} fill="var(--fill-0, #1F2121)" id="Wifi" />
          <path d={svgPaths.p375f99c0} fill="var(--fill-0, #1F2121)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[16px] top-[14px] w-[54px]" data-name="Time">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p22383500} fill="var(--fill-0, #1F2121)" />
            <path d={svgPaths.p3403fe00} fill="var(--fill-0, #1F2121)" />
            <path d={svgPaths.p9ca1000} fill="var(--fill-0, #1F2121)" />
            <path d={svgPaths.p3257e600} fill="var(--fill-0, #1F2121)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[16px] top-[14px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function TopSystemBar() {
  return (
    <div className="-translate-x-1/2 absolute h-[50px] left-1/2 overflow-clip top-0 w-[375px]" data-name="Top System Bar">
      <RightSide />
      <LeftSide />
    </div>
  );
}

export default function Component50AboutApp() {
  return (
    <div className="bg-[#f1f6f6] relative size-full" data-name="50. About App">
      <About />
      <div className="-translate-x-1/2 absolute bg-[#f1f6f6] content-stretch flex flex-col items-center justify-center left-1/2 pb-[16px] pt-[60px] px-[12px] top-0 w-[375px]" data-name="Top Bar">
        <Title />
      </div>
      <BottomSystemBar />
      <TopSystemBar />
    </div>
  );
}