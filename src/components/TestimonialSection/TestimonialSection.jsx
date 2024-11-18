import { useTranslations } from 'next-intl';
import React from 'react';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';

const TestimonialSection = () => {
  const t = useTranslations("HomePage");
  return (
    <section id="Testimonial-section">
    <h2>{t("Testimonial-section.title")}</h2>
    <h3>{t("Testimonial-section.subtitle")}</h3>
    <TestimonialSlider />
  </section>
  );
}

export default TestimonialSection;
