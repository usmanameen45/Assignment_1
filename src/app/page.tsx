import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main>
      <div className="min-h-[calc(100vh-92px)] bg-hero bg-center bg-contain flex justify-center items-center w-full">
        <div className="flex flex-row justify-center gap-6 items-stretch w-[1280px]">
          <div className="text-white w-1/2 flex flex-col gap-6 justify-center items-start">
            <h1 className="text-[64px] leading-[77.5px] font-bold">
              Get More Done with whitepace
            </h1>
            <p className="text-lg leading-[30px]">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday task
            </p>
            <button className="bg-[#4F9CF9] px-10 py-4 rounded-lg flex items-center justify-center text-nowrap">
              Try Whitepace free
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/hero-img.jpg"}
              width={640}
              height={640}
              alt="Image"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="h-auto bg-project bg-left-top bg-cover flex justify-center items-center w-full pt-[140px] pb-[50px]">
        <div className="flex flex-row justify-center gap-6 items-stretch w-[1280px]">
          <div className="text-[#212529] w-1/2 flex flex-col gap-6 justify-center items-start">
            <div className="relative isolate">
              <h1 className="text-[64px] leading-[77.5px] font-bold">
                Project
                <br />
                <span>Management</span>
              </h1>
              <Image
                src={"/images/heading_graphics.png"}
                alt={"Logo"}
                width={500}
                height={34}
                layout="responsive"
                className="absolute bottom-0 block z-[-1] scale-[1.2] origin-left"
              />
            </div>
            <p className="text-lg leading-[30px]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <button className="bg-[#4F9CF9] text-white px-10 py-4 rounded-lg flex items-center justify-center text-nowrap">
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/project.jpg"}
              width={640}
              height={640}
              alt="Image"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="h-auto bg-white flex justify-center items-center w-full pt-[50px] pb-[140px]">
        <div className="flex flex-row-reverse justify-center gap-40 items-stretch w-[1280px]">
          <div className="text-[#212529] w-1/2 flex flex-col gap-6 justify-center items-start">
            <div className="relative isolate">
              <h1 className="text-[64px] leading-[77.5px] font-bold">
                Work
                <br />
                <span>together</span>
              </h1>
              <Image
                src={"/images/heading_graphics.png"}
                alt={"Logo"}
                width={500}
                height={34}
                layout="responsive"
                className="absolute bottom-0 block z-[-1] scale-[1.2] origin-left"
              />
            </div>
            <p className="text-lg leading-[30px]">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <button className="bg-[#4F9CF9] text-white px-10 py-4 rounded-lg flex items-center justify-center text-nowrap">
              Try it now
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/work-together-sec.png"}
              width={640}
              height={640}
              alt="Image"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="h-auto bg-[#043873] flex justify-center items-center w-full py-[140px]">
        <div className="flex flex-row justify-center gap-[98px] items-stretch w-[1280px]">
          <div className="text-white w-1/2 flex flex-col gap-6 justify-center items-start">
            <div className="relative isolate">
              <h1 className="text-[64px] leading-[77.5px] font-bold">
                Use as Extension
              </h1>
              <Image
                src={"/images/heading_graphics.png"}
                alt={"Logo"}
                width={500}
                height={18}
                layout="responsive"
                className="absolute bottom-[-34px] block z-[-1] scale-[0.8] origin-left"
              />
            </div>
            <p className="text-lg leading-[30px]">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <button className="bg-[#4F9CF9] text-white px-10 py-4 rounded-lg flex items-center justify-center text-nowrap">
              Let's Go
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/extension-img.jpg"}
              width={640}
              height={640}
              alt="Image"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="h-auto bg-white flex justify-center items-center w-full py-[140px]">
        <div className="flex flex-row-reverse justify-center gap-[98px] items-stretch w-[1280px]">
          <div className="text-[#212529] w-1/2 flex flex-col gap-6 justify-center items-start">
            <div className="relative isolate">
              <div className="relative isolate">
                <h1 className="text-[64px] leading-[77.5px] font-bold">
                  Customise it to
                  <br />
                  <span>your needs</span>
                </h1>
                <Image
                  src={"/images/heading_graphics.png"}
                  alt={"Logo"}
                  width={500}
                  height={34}
                  layout="responsive"
                  className="absolute bottom-0 block z-[-1] scale-[1] origin-left"
                />
              </div>
            </div>
            <p className="text-lg leading-[30px]">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
            <button className="bg-[#4F9CF9] text-white px-10 py-4 rounded-lg flex items-center justify-center text-nowrap">
              Let's Go
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/customise-img.jpg"}
              width={640}
              height={640}
              alt="Image"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center bg-white">
        <div className="w-[1280px] flex flex-col justify-between items-center py-[140px] gap-[60px]">
          <div className="flex flex-col justify-between items-center gap-6">
            <div className="relative isolate">
              <h1 className="text-[64px] leading-[77.5px] font-bold text-nowrap">
                Choose Your Plan
              </h1>
              <Image
                src={"/images/heading_graphics.png"}
                alt={"Logo"}
                width={500}
                height={34}
                layout="responsive"
                className="absolute bottom-[-8px] right-[-20px] z-[-1] scale-[0.58] origin-right"
              />
            </div>
            <p className="text-lg w-[979px] text-center">
              Whether you want to get organized, keep your personal life on
              track, or boost workplace productivity, Evernote has the right
              plan for you.
            </p>
          </div>
          <div className="flex justify-between w-full items-center gap-8">
            <div className="flex flex-col justify-between items-start py-10 hover:py-20 px-11 gap-[25px] rounded-[10px] border border-[#ffe492] hover:border-[#043873] bg-white hover:bg-[#043873] w-1/3 text-[#212529] hover:text-white transition-all duration-300 delay-150 group">
              <p className="text-2xl leading-9 font-semibold">Free</p>
              <p className="text-4xl text-[#212529] leading-[43.57px] font-bold group-hover:text-[#ffe492] transition-all duration-300 delay-150">
                $0
              </p>
              <p className="text-lg font-medium leading[23px] ">
                Capture ideas and find them quickly
              </p>
              <ul className="flex flex-col justify-between items-start gap-7">
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>Sync unlimited devices</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>10 GB monthly uploads</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>200 MB max. note size</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>Customize Home dashboard and access extra widgets</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>Connect primary Google Calendar account</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>
                    Add due dates, reminders, and notifications to your tasks
                  </p>
                </li>
              </ul>
              <button className="text-base text-[#212529] group-hover:text-white leading-[19.36px] font-medium border border-[#ffe492] py-4 px-10 rounded-lg group-hover:bg-[#4F9CF9] group-hover:border-[#4F9CF9] transition-all duration-300 delay-150">
                Get Started
              </button>
            </div>
            <div className="flex flex-col justify-between items-start py-10 hover:py-20 px-11 gap-[25px] rounded-[10px] border border-[#ffe492] hover:border-[#043873] bg-white hover:bg-[#043873] w-1/3 text-[#212529] hover:text-white transition-all duration-300 delay-150 group">
              <p className="text-2xl leading-9 font-semibold">Personal</p>
              <p className="text-4xl text-[#212529] leading-[43.57px] font-bold group-hover:text-[#ffe492] transition-all duration-300 delay-150">
                $11.99
              </p>
              <p className="text-lg font-medium leading[23px] ">
                Keep home and family on track
              </p>
              <ul className="flex flex-col justify-between items-start gap-7">
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>Sync unlimited devices</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>10 GB monthly uploads</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>200 MB max. note size</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>Customize Home dashboard and access extra widgets</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>Connect primary Google Calendar account</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>
                    Add due dates, reminders, and notifications to your tasks
                  </p>
                </li>
              </ul>
              <button className="text-base text-[#212529] group-hover:text-white leading-[19.36px] font-medium border border-[#ffe492] py-4 px-10 rounded-lg group-hover:bg-[#4F9CF9] group-hover:border-[#4F9CF9] transition-all duration-300 delay-150">
                Get Started
              </button>
            </div>
            <div className="flex flex-col justify-between items-start py-10 hover:py-20 px-11 gap-[25px] rounded-[10px] border border-[#ffe492] hover:border-[#043873] bg-white hover:bg-[#043873] w-1/3 text-[#212529] hover:text-white transition-all duration-300 delay-150 group">
              <p className="text-2xl leading-9 font-semibold">Organization</p>
              <p className="text-4xl text-[#212529] leading-[43.57px] font-bold group-hover:text-[#ffe492] transition-all duration-300 delay-150">
                $49.99
              </p>
              <p className="text-lg font-medium leading[23px] ">
                Capture ideas and find them quickly
              </p>
              <ul className="flex flex-col justify-between items-start gap-7">
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>Sync unlimited devices</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>10 GB monthly uploads</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>200 MB max. note size</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>Customize Home dashboard and access extra widgets</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>Connect primary Google Calendar account</p>
                </li>
                <li className="flex justify-start items-center gap-[19px] text-base font-normal leading-[20px]">
                  <div className="grow group-hover:text-[#ffe492] transition-all duration-300 delay-150 text-[#212529]">
                    <IoMdCheckmarkCircleOutline size={18} />
                  </div>
                  <p>
                    Add due dates, reminders, and notifications to your tasks
                  </p>
                </li>
              </ul>
              <button className="text-base text-[#212529] group-hover:text-white leading-[19.36px] font-medium border border-[#ffe492] py-4 px-10 rounded-lg group-hover:bg-[#4F9CF9] group-hover:border-[#4F9CF9] transition-all duration-300 delay-150">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full bg-three bg-left-top bg-cover">
        <div className="flex flex-col justify-center items-center py-[140px] px-8 gap-6">
          <div className="relative isolate">
            <h1 className="text-[72px] text-white leading-[87.14px] font-bold text-nowrap">
              Your work, everywhere you are
            </h1>
            <Image
              src={"/images/element-2.png"}
              alt={"Logo"}
              width={500}
              height={34}
              layout="responsive"
              className="absolute bottom-[-32px] right-[-36px] z-[-1] scale-[0.3] origin-right"
            />
          </div>
          <p className="text-white text-center leading-[30px] text-lg font-normal w-[1060px]">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <button className="bg-[#4F9CF9] text-white px-10 py-4 rounded-lg flex items-center justify-center text-nowrap mt-8">
            Try Taskey
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>

      <div className="h-auto bg-white flex justify-center items-center w-full pt-[140px] pb-[50px]">
        <div className="flex flex-row justify-center gap-6 items-stretch w-[1280px]">
          <div className="text-[#212529] w-1/2 flex flex-col gap-6 justify-center items-start">
            <div className="relative isolate">
              <h1 className="text-[64px] leading-[77.5px] font-bold">
                100% your data
              </h1>
              <Image
                src={"/images/heading_graphics.png"}
                alt={"Logo"}
                width={500}
                height={34}
                layout="responsive"
                className="absolute bottom-[-10px] right-[-195px] block z-[-1] scale-[0.7] origin-left"
              />
            </div>
            <p className="text-lg leading-[30px]">
              The app is open source and your notes are saved to an open format,
              so you'll always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </p>
            <button className="bg-[#4F9CF9] text-white px-10 py-4 rounded-lg flex items-center justify-center text-nowrap">
              Read more
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/data-img.png"}
              width={640}
              height={640}
              alt="Image"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center py-[140px] px-8 w-[1280px] gap-[100px]">
          <div className="relative isolate">
            <h1 className="text-[64px] leading-[77.5px] font-bold">
              Our sponsors
            </h1>
            <Image
              src={"/images/heading_graphics.png"}
              alt={"Logo"}
              width={500}
              height={34}
              layout="responsive"
              className="absolute bottom-[-8px] right-[-140px] block z-[-1] scale-[0.7]  origin-left"
            />
          </div>
          <div className="flex justify-between items-stretch w-full">
            <div className="flex items-center">
              <Image
                src={"/images/Apple.png"}
                alt="Apple"
                height={71}
                width={71}
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex items-center">
              <Image
                src={"/images/Microsoft.png"}
                alt="Microsoft"
                height={71}
                width={71}
                layout="responsive"
                className="object-contain w-auto h-full"
              />
            </div>
            <div className="flex items-center">
              <Image
                src={"/images/Slack.png"}
                alt="Slack"
                height={71}
                width={71}
                layout="responsive"
                className="object-contain w-auto h-auto"
              />
            </div>
            <div className="flex items-center">
              <Image
                src={"/images/Google.png"}
                alt="Google"
                height={71}
                width={71}
                layout="responsive"
                className="object-contain w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto bg-four bg-cover bg-left-top flex justify-center items-center w-full py-[140px]">
        <div className="flex flex-row-reverse justify-center gap-[100px] items-stretch w-[1280px]">
          <div className="text-[#212529] w-1/2 flex flex-col gap-6 justify-center items-start">
            <div className="relative isolate">
              <div className="relative isolate">
                <h1 className="text-[72px] leading-[87.14px] text-white font-bold">
                  Work with Your Favorite Apps Using whitepace
                </h1>
              </div>
            </div>
            <p className="text-lg leading-[30px] text-[18px] text-white">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </p>
            <button className="bg-[#4F9CF9] text-white px-10 py-4 rounded-lg flex items-center justify-center text-nowrap">
              Read more
              <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/Apps.png"}
              width={640}
              height={640}
              alt="Image"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center bg-white">
        <div className="w-[1280px] flex flex-col justify-between items-center py-[140px] gap-[60px]">
          <div className="relative isolate">
            <h1 className="text-[72px] leading-[87.14px] font-bold text-nowrap">
              See what our trusted users Say
            </h1>
            <Image
              src={"/images/heading_graphics.png"}
              alt={"Logo"}
              width={500}
              height={34}
              layout="responsive"
              className="absolute -bottom-10 right-[300px] z-[-1] scale-[0.3] origin-right"
            />
          </div>
          <Carousel className="w-full"
            opts={{
              align: "start",
              slidesToScroll: 1,
              direction: "ltr",
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="w-full">
              <CarouselItem className="basis-1/3 bg-yellow-300 box-border p-5">1</CarouselItem>
              <CarouselItem className="basis-1/3 bg-green-300 box-border p-5">2</CarouselItem>
              <CarouselItem className="basis-1/3 bg-red-300 box-border p-5">3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-[50%] translate-x-[calc(-100%-12px)] top-[100%] translate-y-[100%]" />
            <CarouselNext className="right-[50%] translate-x-[calc(100%+12px)] top-[100%] translate-y-[100%]" />
          </Carousel>
        </div>
      </div>
    </main>
  );
}
