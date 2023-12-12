import { Mail, MessageCircle, MessagesSquare } from "lucide-react";
import ContactCard from "@/components/ContactCard";
import ContactForm from '@/components/ContactForm';

function page() {
  return (
    <>
      <div className="w-full h-full overflow-hidden">
        <h1 className="flex items-center justify-center mt-3 text-lg uppercase font-bold">
          Contact Us
        </h1>
        <div className="flex items-center justify-between">
          <ContactCard
            icon={<Mail color="red" width="6em" height="2.5em" />}
            title="Email Support"
            subtitle="Monday to Fraiday Expected"
            responseTime="response time:72"
            linkText="Send Email"
          />
          <ContactCard
            icon={<MessageCircle color="red" width="6em" height="2.5em" />}
            title="Live Chat"
            subtitle="Monday to Fraiday Expected"
            responseTime="response time:72"
            linkText="Chat Us"
          />
          <ContactCard
            icon={<MessagesSquare color="red" width="6em" height="2.5em" />}
            title="Email Support"
            subtitle="Monday to Fraiday Expected"
            responseTime="response time:72"
            linkText="Ask the community"
          />
        </div>
        <ContactForm />
      </div>
    </>
  );
}

export default page;
