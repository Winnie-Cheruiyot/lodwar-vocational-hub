import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: "What are the admission requirements?",
    answer: "Admission requirements vary by program level. For Certificate level, you need KCSE mean grade D+ or equivalent. For Diploma level, KCSE mean grade C- or equivalent is required. All students need to complete an application form, provide copies of national ID or birth certificate, and submit two passport photos."
  },
  {
    question: "How long are the courses?",
    answer: "Most of our courses are 2 years long, offering both Certificate and Diploma levels. Arc Welding is a 1-year Certificate program. The duration allows for comprehensive theoretical learning and extensive practical training to ensure job readiness."
  },
  {
    question: "What is the fee structure?",
    answer: "Fees vary by course and level. We offer flexible payment options including installment plans. Contact our admissions office for detailed fee information and available financial assistance programs. We also have partnerships with organizations that sponsor students."
  },
  {
    question: "Are there job placement opportunities after graduation?",
    answer: "Yes! We have strong industry partnerships and actively help graduates find employment. Our alumni network is extensive, with over 3,400 skilled professionals working across Kenya. We also support entrepreneurship initiatives for students who want to start their own businesses."
  },
  {
    question: "What facilities are available for practical training?",
    answer: "We have modern workshops and laboratories equipped with industry-standard tools and equipment. Each department has specialized facilities including automotive workshops, electrical labs, ICT labs, culinary kitchens, beauty salons, tailoring rooms, and construction workshops."
  },
  {
    question: "When are the intake periods?",
    answer: "We have three intake periods per year: January (registration: Jan 2-15, classes begin Jan 18), May (registration: May 2-15, classes begin May 18), and September (registration: Sep 2-15, classes begin Sep 18). This allows flexibility for students to join at different times."
  },
  {
    question: "Do you offer accommodation?",
    answer: "Yes, we provide accommodation facilities for students who need them. Our hostels are secure and comfortable, with separate facilities for male and female students. Meals are also provided in our cafeteria."
  },
  {
    question: "What certificates do graduates receive?",
    answer: "Graduates receive certificates and diplomas that are recognized by the Kenya National Qualifications Authority (KNQA). Our programs are accredited and meet industry standards, ensuring your qualifications are valued by employers nationwide."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Find answers to common questions about our programs, admission, and facilities
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;