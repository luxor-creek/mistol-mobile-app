import svgPaths from "./svg-jxu9ipnlwx";
import imgImage from "figma:asset/acb9e58255132d5c465dfade135577700ba0b114.png";

function SendButton() {
  return (
    <div className="bg-[#e7eded] content-stretch flex items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[30px] shrink-0 size-[40px]" data-name="Send Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="fi:plus">
        <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-6.43%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 13.1667">
              <path d="M0.75 0.75V12.4167" id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.75px_-6.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1667 1.5">
              <path d="M0.75 0.75H12.4167" id="Vector" stroke="var(--stroke-0, #1F2121)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SendButton1() {
  return (
    <div className="bg-[#e7eded] content-stretch flex items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[30px] shrink-0 size-[40px]" data-name="Send Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="fi:send">
        <div className="absolute inset-[8.33%_8.33%_45.83%_45.83%]" data-name="Vector">
          <div className="absolute inset-[-8.18%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
              <path d="M9.91667 0.75L0.75 9.91667" id="Vector" stroke="var(--stroke-0, #A8B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-4.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1667 18.1667">
              <path d={svgPaths.p13879770} id="Vector" stroke="var(--stroke-0, #A8B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[3px] items-start leading-[0] relative shrink-0 w-[274px]" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#595e5e] text-[12px] w-full">
        <p className="leading-[1.25]">You</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#1f2121] text-[16px] tracking-[-0.16px] w-full">
        <p className="leading-[1.32]">Who is the founder?</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Content">
      <Title />
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Question">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#f1f6f6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />
      </div>
      <div className="bg-[#daea69] content-stretch flex gap-[6px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[16px] shrink-0" data-name="Chat Bubble">
        <Content />
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[3px] items-start leading-[0] relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#595e5e] text-[12px] w-full">
        <p className="leading-[1.25]">Chappy</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#1f2121] text-[16px] tracking-[-0.16px] w-full">
        <p className="leading-[1.32]">VanguardCX was founded by Richard Fang</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end min-h-px min-w-px relative" data-name="Content">
      <Title1 />
      <div className="relative rounded-[8px] shrink-0 size-[100px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function Answer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Answer">
      <div className="bg-white content-stretch flex gap-[6px] items-start justify-end overflow-clip pb-[16px] pt-[12px] px-[16px] relative rounded-[16px] shrink-0 w-[306px]" data-name="Chat Bubble">
        <Content1 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#f1f6f6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />
      </div>
    </div>
  );
}

function SendButton2() {
  return (
    <div className="bg-[#1f2121] content-stretch flex items-center justify-center overflow-clip pl-[14px] pr-[12px] py-[10px] relative rounded-[30px] shrink-0 size-[40px]" data-name="Send Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="fi:play">
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-5%_-6.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1667 16.5">
              <path d={svgPaths.p1cd98100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecordGraph() {
  return (
    <div className="h-[44px] relative shrink-0 w-[174px]" data-name="Record Graph">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 44">
        <g id="Record Graph">
          <path d="M6 15.5L6 28.5" id="Line" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M12 4.5L12 39.5" id="Line_2" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M18 11L18 33" id="Line_3" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M24 13.5L24 30.5" id="Line_4" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M30 6.5L30 37.5" id="Line_5" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M36 2L36 42" id="Line_6" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M42 13L42 31" id="Line_7" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M48 6.5L48 37.5" id="Line_8" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M54 6.5L54 37.5" id="Line_9" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M60 14.5L60 29.5" id="Line_10" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M66 10.5L66 33.5" id="Line_11" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M72 15.5L72 28.5" id="Line_12" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M78 10L78 34" id="Line_13" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M84 15.5L84 28.5" id="Line_14" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M90 9L90 35" id="Line_15" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M96 6L96 38" id="Line_16" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M102 10L102 34" id="Line_17" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M108 6L108 38" id="Line_18" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M114 10L114 34" id="Line_19" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M120 12L120 32" id="Line_20" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M126 7.5L126 36.5" id="Line_21" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M132 2L132 42" id="Line_22" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M138 10.5L138 33.5" id="Line_23" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M144 12L144 32" id="Line_24" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M150 7L150 37" id="Line_25" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M156 12L156 32" id="Line_26" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M162 8L162 36" id="Line_27" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
          <path d="M168 15L168 29" id="Line_28" stroke="var(--stroke-0, #595E5E)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ChatSection() {
  return (
    <div className="content-stretch flex gap-[6px] items-center overflow-clip relative rounded-[22px] shrink-0" data-name="Chat Section">
      <SendButton2 />
      <RecordGraph />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#595e5e] text-[12px] w-[min-content]">
        <p className="leading-[1.25]">You</p>
      </div>
      <ChatSection />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[220px]" data-name="Content">
      <Title2 />
    </div>
  );
}

function Question1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Question">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#f1f6f6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />
      </div>
      <div className="bg-[#daea69] content-stretch flex gap-[6px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[16px] shrink-0" data-name="Chat Bubble">
        <Content2 />
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[3px] items-start leading-[0] relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#595e5e] text-[12px] w-full">
        <p className="leading-[1.25]">Chappy</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#1f2121] text-[16px] tracking-[-0.16px] w-full">
        <p className="leading-[1.32]">He is a seasoned entrepreneur and executive with experience in customer service, outsourcing, and business operations. Under his leadership, VanguardCX has grown into a prominent player in the customer experience.</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end min-h-px min-w-px relative" data-name="Content">
      <Title3 />
    </div>
  );
}

function Answer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Answer">
      <div className="bg-white content-stretch flex gap-[6px] items-start justify-end overflow-clip pb-[16px] pt-[12px] px-[16px] relative rounded-[16px] shrink-0 w-[306px]" data-name="Chat Bubble">
        <Content3 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#f1f6f6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[12px] top-[122px] w-[351px]" data-name="Chat">
      <Question />
      <Answer />
      <Question1 />
      <Answer1 />
    </div>
  );
}

function Title4() {
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
        <p className="leading-[1.3]">New Chat</p>
      </div>
      <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[12px] relative rounded-[12px] shrink-0 size-[34px]" data-name="Button">
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6615 11.336">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p327faf30} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, #1F2121)" />
            <path d={svgPaths.pea18000} fill="var(--fill-0, #1F2121)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p30a3fd00} fill="var(--fill-0, #1F2121)" id="Rectangle_2" />
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

export default function Component19ChatAudioResult() {
  return (
    <div className="bg-[#f1f6f6] relative size-full" data-name="19. Chat (Audio Result)">
      <div className="-translate-x-1/2 absolute bg-white bottom-[42px] content-stretch flex gap-[12px] items-center left-1/2 overflow-clip p-[6px] rounded-[32px] w-[351px]" data-name="Chat Bar">
        <SendButton />
        <div className="flex flex-[1_0_0] flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#a8b0b0] text-[16px] tracking-[-0.16px]">
          <p className="leading-[1.32]">Type a Question</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="fi:mic">
          <div className="absolute inset-[95.83%_33.33%_4.17%_33.33%]" data-name="Vector">
            <div className="absolute inset-[-0.75px_-11.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 1.5">
                <path d="M0.75 0.75H7.41667" id="Vector" stroke="var(--stroke-0, #A8B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[4.17%] left-1/2 right-1/2 top-[79.17%]" data-name="Vector">
            <div className="absolute inset-[-22.5%_-0.75px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 4.83333">
                <path d="M0.75 0.75V4.08333" id="Vector" stroke="var(--stroke-0, #A8B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[4.17%_37.5%_37.5%_37.5%]" data-name="Vector">
            <div className="absolute inset-[-6.43%_-15%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 13.1667">
                <path d={svgPaths.p16cd4940} id="Vector" stroke="var(--stroke-0, #A8B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[41.67%_20.83%_20.83%_20.83%]" data-name="Vector">
            <div className="absolute inset-[-10%_-6.43%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1667 9">
                <path d={svgPaths.p30f78480} id="Vector" stroke="var(--stroke-0, #A8B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
        <SendButton1 />
      </div>
      <Chat />
      <div className="-translate-x-1/2 absolute bg-[#f1f6f6] content-stretch flex flex-col items-center justify-center left-1/2 pb-[16px] pt-[60px] px-[12px] top-0 w-[375px]" data-name="Top Bar">
        <Title4 />
      </div>
      <BottomSystemBar />
      <TopSystemBar />
    </div>
  );
}