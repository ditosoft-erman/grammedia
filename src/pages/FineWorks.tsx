

export const FineWorks: React.FC = () => {
    return (
        <div className="fine-works-container mx-auto max-w-full">
          <div className="w-full">
            <div className="bg-cover bg-fine bg-no-repeat flex justify-center h-[20rem]">
              <div
                className="message flex flex-col gap-y-4 justify-center text-center w-4/5 lg:w-2/5 text-white"
                data-aos="zoom-in"
              >
                <div className="md:text-base lg:text-6xl mx-auto" data-aos="fade-up">
                  Fine Works
                </div>
                <p className="md:text-base md:w-64 lg:text-2xl lg:w-auto mx-auto">
                  By empowering students to achieve their aspirations and make positive
                  contributions to society through technological innovations, we aim to
                  create a bright future for the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default FineWorks;