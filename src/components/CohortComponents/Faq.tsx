import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="w-full md:w-1/2 mb-20">
      {/* TODO: Get FAQs */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How often are the classes conducted?
          </AccordionTrigger>
          <AccordionContent>
            Classes are held live on Google Meet twice or thrice a week.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>When can I seek doubt clearance?</AccordionTrigger>
          <AccordionContent>
            The doubt clearance portal is open every day from 18:00 to 22:00.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What kind of practices are followed in the cohort?
          </AccordionTrigger>
          <AccordionContent>
            We strictly adhere to industry-preferred practices to ensure
            you&apos;re equipped with the most relevant skills and knowledge.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
