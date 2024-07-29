import Footer from "../components/footer";
import "../css/aboutpage.css";

function AboutPage() {
  return (
    <>
      <div className="block"></div>
      <div className="aboutBanner"></div>

      <div className="aboutPageWarp">
        <div className="aboutWrap">
          <h2 className="aboutTitle">About & Why</h2>
          <p>
            In the fast-evolving world of software development, having a
            comprehensive UI/UX guideline is crucial. A well-defined guideline
            ensures consistency across different interfaces, enhances user
            experience, and promotes efficiency in the design and development
            processes. The OXD Guideline is meticulously crafted to support
            human resource software, aiming to provide a friendly and intuitive
            user interface. By adhering to these guidelines, developers and
            designers can create interfaces that are not only visually appealing
            but also highly functional and user-friendly.
            <br />
            <br />
            <strong>Acknowledgment:</strong>
            <br />
            We extend our gratitude to all contributors and users who have
            provided valuable feedback and insights, making the OXD Guideline
            robust and user-centric. Special thanks to our dedicated UIUX team
            and product team, developers, and QAs whose hard work and creativity
            have shaped this comprehensive guideline. Your contributions have
            been invaluable in ensuring that the OXD Guideline meets the highest
            standards of usability and accessibility.
            <br />
            <br />
            <strong>Copyright Agreement:</strong>
            <br />
            © 2024 OXD Guideline. All rights reserved. Unauthorized use and/or
            duplication of this material without express and written permission
            from the author and/or owner is strictly prohibited. The content of
            this guideline, including all text, graphics, and design elements,
            is protected by copyright law. Any reproduction or redistribution of
            this material in any form without prior written consent from the
            copyright holder is prohibited and may result in legal action.
            <br />
            <br />
            <strong>Design Language Warning:</strong>
            <br />
            The OXD Guideline represents a well-defined design language that has
            been carefully developed to ensure a cohesive and harmonious user
            experience. Altering or deviating from this design language can
            potentially harm the software's user interface and user experience.
            Such changes can lead to inconsistencies, confusion, and a
            diminished overall user experience. Adherence to these guidelines is
            essential for maintaining the intended quality and consistency,
            ensuring that users receive the best possible experience when
            interacting with the software.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
