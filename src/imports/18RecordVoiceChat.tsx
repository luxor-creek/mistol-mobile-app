import svgPaths from "./svg-m8zra28zad";
import imgImage from "figma:asset/acb9e58255132d5c465dfade135577700ba0b114.png";

function Text() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[3px] items-start leading-[0] relative shrink-0 w-[156px]" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0 text-[#a8b0b0] text-[12px] w-full">
        <p className="leading-[1.25]">You</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#1f2121] text-[16px] tracking-[-0.16px] w-full">
        <p className="leading-[1.32]">What is VanguardCX?</p>
      </div>
    </div>
  );
}

function Question1() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip px-[16px] py-[12px] relative rounded-[16px] shrink-0" data-name="Question">
      <Text />
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Question">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#f1f6f6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />
      </div>
      <Question1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[3px] items-start leading-[0] relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col justify-center relative shrink-0 text-[#595e5e] text-[12px] w-full">
        <p className="leading-[1.25]">Chappy</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#1f2121] text-[16px] tracking-[-0.16px] w-full">
        <p className="leading-[1.32]">VanguardCX is a customer experience (CX) solutions company that provides outsourced services to businesses looking to improve their customer support and engagement. The|</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end min-h-px min-w-px relative" data-name="Content">
      <Title />
    </div>
  );
}

function Answer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Answer">
      <div className="bg-white content-stretch flex gap-[6px] items-start justify-end overflow-clip pb-[16px] pt-[12px] px-[16px] relative rounded-[16px] shrink-0 w-[306px]" data-name="Chat Bubble">
        <Content />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#f1f6f6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[3px] items-start leading-[0] relative shrink-0 w-[145px]" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0 text-[#a8b0b0] text-[12px] w-full">
        <p className="leading-[1.25]">You</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#1f2121] text-[16px] tracking-[-0.16px] w-full">
        <p className="leading-[1.32]">Who is the founder?</p>
      </div>
    </div>
  );
}

function Question3() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip px-[16px] py-[12px] relative rounded-[16px] shrink-0" data-name="Question">
      <Text1 />
    </div>
  );
}

function Question2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Question">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <div className="bg-[#f1f6f6] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Spacer" />
      </div>
      <Question3 />
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

function Answer1() {
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

function Chat() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[12px] top-[122px] w-[351px]" data-name="Chat">
      <Question />
      <Answer />
      <Question2 />
      <Answer1 />
    </div>
  );
}

function Title2() {
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

function Background() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Background">
      <Chat />
      <div className="-translate-x-1/2 absolute bg-[#f1f6f6] content-stretch flex flex-col items-center justify-center left-1/2 pb-[16px] pt-[60px] px-[12px] top-0 w-[375px]" data-name="Top Bar">
        <Title2 />
      </div>
    </div>
  );
}

function RecordGraph() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Record Graph">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[6px] py-[2px] relative w-full">
          <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[13px]" data-name="Line">
                <div className="absolute inset-[-1px_-7.69%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                    <path d="M1 1H14" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[30px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[30px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 2">
                    <path d="M1 1H31" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[40px]" data-name="Line">
                <div className="absolute inset-[-1px_-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 2">
                    <path d="M1 1H41" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[23px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[23px]" data-name="Line">
                <div className="absolute inset-[-1px_-4.35%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 2">
                    <path d="M1 1H24" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[16px]" data-name="Line">
                <div className="absolute inset-[-1px_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
                    <path d="M1 1H17" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[35px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[35px]" data-name="Line">
                <div className="absolute inset-[-1px_-2.86%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 2">
                    <path d="M1 1H36" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[22px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[22px]" data-name="Line">
                <div className="absolute inset-[-1px_-4.55%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 2">
                    <path d="M1 1H23" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[17px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[17px]" data-name="Line">
                <div className="absolute inset-[-1px_-5.88%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 2">
                    <path d="M1 1H18" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[31px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[31px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.23%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 2">
                    <path d="M1 1H32" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[40px]" data-name="Line">
                <div className="absolute inset-[-1px_-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 2">
                    <path d="M1 1H41" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[18px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[18px]" data-name="Line">
                <div className="absolute inset-[-1px_-5.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 2">
                    <path d="M1 1H19" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[31px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[31px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.23%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 2">
                    <path d="M1 1H32" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[31px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[31px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.23%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 2">
                    <path d="M1 1H32" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[15px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[15px]" data-name="Line">
                <div className="absolute inset-[-1px_-6.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 2">
                    <path d="M1 1H16" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[23px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[23px]" data-name="Line">
                <div className="absolute inset-[-1px_-4.35%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 2">
                    <path d="M1 1H24" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[13px]" data-name="Line">
                <div className="absolute inset-[-1px_-7.69%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                    <path d="M1 1H14" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[29px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[29px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.45%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 2">
                    <path d="M1 1H30" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[40px]" data-name="Line">
                <div className="absolute inset-[-1px_-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 2">
                    <path d="M1 1H41" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[20px]" data-name="Line">
                <div className="absolute inset-[-1px_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 2">
                    <path d="M1 1H21" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[31px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[31px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.23%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 2">
                    <path d="M1 1H32" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[28px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[28px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.57%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 2">
                    <path d="M1 1H29" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[20px]" data-name="Line">
                <div className="absolute inset-[-1px_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 2">
                    <path d="M1 1H21" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[31px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[31px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.23%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 2">
                    <path d="M1 1H32" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[40px]" data-name="Line">
                <div className="absolute inset-[-1px_-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 2">
                    <path d="M1 1H41" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[24px]" data-name="Line">
                <div className="absolute inset-[-1px_-4.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
                    <path d="M1 1H25" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[13px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[13px]" data-name="Line">
                <div className="absolute inset-[-1px_-7.69%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 2">
                    <path d="M1 1H14" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[26px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[26px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.85%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 2">
                    <path d="M1 1H27" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[32px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 2">
                    <path d="M1 1H33" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[24px]" data-name="Line">
                <div className="absolute inset-[-1px_-4.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
                    <path d="M1 1H25" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[32px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[32px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 2">
                    <path d="M1 1H33" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[24px]" data-name="Line">
                <div className="absolute inset-[-1px_-4.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 2">
                    <path d="M1 1H25" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[20px]" data-name="Line">
                <div className="absolute inset-[-1px_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 2">
                    <path d="M1 1H21" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[29px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[29px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.45%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 2">
                    <path d="M1 1H30" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[40px]" data-name="Line">
                <div className="absolute inset-[-1px_-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 2">
                    <path d="M1 1H41" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[23px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[23px]" data-name="Line">
                <div className="absolute inset-[-1px_-4.35%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 2">
                    <path d="M1 1H24" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[20px]" data-name="Line">
                <div className="absolute inset-[-1px_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 2">
                    <path d="M1 1H21" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[30px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[30px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 2">
                    <path d="M1 1H31" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[20px]" data-name="Line">
                <div className="absolute inset-[-1px_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 2">
                    <path d="M1 1H21" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[28px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[28px]" data-name="Line">
                <div className="absolute inset-[-1px_-3.57%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 2">
                    <path d="M1 1H29" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[14px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "23" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[14px]" data-name="Line">
                <div className="absolute inset-[-1px_-7.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 2">
                    <path d="M1 1H15" id="Line" stroke="var(--stroke-0, #C7CECE)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1f2121] relative rounded-[30px] shrink-0 size-[50px]" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="fi:mic">
          <div className="absolute inset-[95.83%_33.33%_4.17%_33.33%]" data-name="Vector">
            <div className="absolute inset-[-0.75px_-9.38%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 1.5">
                <path d="M0.75 0.75H8.75" id="Vector" stroke="var(--stroke-0, #DAEA69)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[4.17%] left-1/2 right-1/2 top-[79.17%]" data-name="Vector">
            <div className="absolute inset-[-18.75%_-0.75px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 5.5">
                <path d="M0.75 0.75V4.75" id="Vector" stroke="var(--stroke-0, #DAEA69)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[4.17%_37.5%_37.5%_37.5%]" data-name="Vector">
            <div className="absolute inset-[-7.14%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 16">
                <path d={svgPaths.p2ee11db0} id="Vector" stroke="var(--stroke-0, #DAEA69)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[41.67%_20.83%_20.83%_20.83%]" data-name="Vector">
            <div className="absolute inset-[-11.11%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
                <path d={svgPaths.p18b32a80} id="Vector" stroke="var(--stroke-0, #DAEA69)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-10 border-[#daea69] border-solid inset-[-10px] pointer-events-none rounded-[40px]" />
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

export default function Component18RecordVoiceChat() {
  return (
    <div className="bg-[#f1f6f6] relative size-full" data-name="18. Record Voice Chat">
      <Background />
      <div className="absolute backdrop-blur-[2px] bg-[rgba(168,176,176,0.8)] h-[812px] left-0 top-0 w-[375px]" data-name="Overlay" />
      <div className="-translate-x-1/2 absolute bg-white bottom-[42px] content-stretch flex flex-col gap-[32px] items-center left-1/2 overflow-clip px-[18px] py-[24px] rounded-[22px] w-[351px]" data-name="Audio Record">
        <RecordGraph />
        <Button />
      </div>
      <BottomSystemBar />
      <TopSystemBar />
    </div>
  );
}