import { AiOutlineContacts } from "react-icons/ai";
import { RiMailSendLine } from "react-icons/ri";
import Button from "@/components/button";

export default function Contact() {
  return (
    <div className="mb-14" id="contact">
      <Button Icon={AiOutlineContacts} text={"Contact"} />
      <h1 className="text-6xl break-normal md:mb-12 md:w-3/4">
        Contact <span className="text-green-400">me</span>
      </h1>
      <div className="text-base xs:mt-12 md:w-3/4 flex">
        <h1 className="text-2xl font-light">federico.hammond8@gmail.com</h1>
        <span className="ml-12">
          <a href="mailto:federico.hammond8@gmail.com">
            <RiMailSendLine className="text-4xl hover:text-green-400" />
          </a>
        </span>
      </div>
    </div>
  );
}
