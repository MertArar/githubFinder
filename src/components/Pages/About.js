import React from "react";

const About = () => {
  return (
    <div className=" flex flex-col justify-start items-start text-justify px-24 mt-20 bg-gray-700 mb-20 leading-3">
      <h3 className="font-semibold text-3xl text-gray-200">TERMS AND POLICY</h3>
      <p className="text-xl text-gray-300 mt-5 tracking-wider">
        Please read the following terms and policy carefully. This document
        constitutes an agreement between the parties regarding the use of the
        GitHub User Finder API ("API") and specifies your legal rights,
        responsibilities, and limitations.
      </p>
      <p className="text-xl text-gray-400 mt-10 tracking-wide ">
        1. PI Usage: <br /> a. By accessing the GitHub User Finder service using
        the API, you agree to abide by these terms and policy. You are required
        to use this API only for the purposes determined by OpenAI. <br /> b.
        The usage of the API must comply with applicable laws, regulations, and
        GitHub's terms of service. <br /> c. It is the user's responsibility to
        provide the necessary authorization to access the API. Providing
        authorization falsely or through fraudulent means is prohibited. <br />{" "}
        d. When using the API, you must respect the privacy rights of other
        users. You shall not share or misuse the data obtained through the API
        without proper authorization.
      </p>
      <p className="text-xl text-gray-400 mt-10 tracking-wide ">
        2. Data Usage and Storage: <br /> a. The data obtained through the API
        must be used solely for the purposes determined by OpenAI. Using this
        data for any other purpose would violate the terms of API usage. <br />{" "}
        b. Adequate security measures must be implemented to protect the data
        obtained through the API from unauthorized access or misuse. <br /> c.
        The data retention period is limited to the duration specified by
        OpenAI. Storing or using the data obtained through the API beyond this
        period is prohibited.
      </p>
      <p className="text-xl text-gray-400 mt-10 tracking-wide ">
        3. Liability and Warranty: <br /> a. The API is provided on an "as is"
        basis. OpenAI does not guarantee that the API will operate
        uninterrupted, error-free, or secure. You acknowledge that the use of
        the API carries inherent risks, and you assume full responsibility for
        such risks. <br /> b. OpenAI shall not be held liable for any damages,
        including but not limited to direct, indirect, special, consequential,
        or punitive damages, arising from the use or inability to use the API.{" "}
        <br /> c. If the usage of the API requires the use of third-party
        services, the user is responsible for such services and OpenAI assumes
        no liability for their security, accuracy, or performance.
      </p>
      <p className="text-xl text-gray-400 mt-10 tracking-wide ">
        4. Privacy and Personal Data: <br /> a. Personal data obtained during
        the usage of the API must be processed in compliance with relevant
        privacy laws. Unauthorized collection, processing, or sharing of this
        data is prohibited. <br /> b. Any personal data provided to OpenAI in
        relation to the usage of the API will be subject to the OpenAI Privacy
        Policy.
      </p>
      <p className="text-xl text-gray-400 mt-10 tracking-wide ">
        5. Modifications and Termination: <br /> a. OpenAI reserves the right to
        update these terms and policy from time to time at its sole discretion.
        The updates shall become effective on the date announced by OpenAI.{" "}
        <br /> b. OpenAI may suspend or terminate access to the API at any time
        without prior notice. OpenAI shall not be held liable for any damages
        resulting from the termination of API access.
      </p>
      <p className="text-xl text-gray-400 mt-10 tracking-wide ">
        6. Dispute Resolution: <br /> a. Disputes arising from these terms and
        policy shall be governed by the laws of the United States. <br /> b. In
        the event of any dispute, the parties shall first attempt to resolve the
        matter amicably in good faith. If the dispute cannot be resolved, it
        shall be subject to the jurisdiction of the competent courts.
      </p>
      <p className="text-xl text-gray-300 mt-20 mb-20 tracking-wider ">
        *These terms and policy constitute an agreement between the parties
        regarding the use of the GitHub User Finder API. By using the API, you
        acknowledge that you have read and understood these terms and policy and
        explicitly agree to abide by them. Please read and ensure your clear
        understanding of these terms and policy before using the API.*
      </p>
    </div>
  );
};

export default About;
