import Container from "../../components/Shared/Container";
import styles from "../../styles/Faq.module.css";

const Faq = () => {
  return (
    <div className="relative ">
      <div className={styles.background}></div>
      <Container className="py-24">
        <div className="mb-20 text-white">
          <h1 className=" text-center text-4xl font-bold tracking-widest mb-5">
            SEE WHY CUSTOMERS LOVE OUR MOBILES
          </h1>
          <p className="text-xl text-stone-400 text-center tracking-widest">
            DESIGNED TO PERFECTION
          </p>
        </div>
        <div className="grid grid-cols-3 gap-20">
          <div>
            <img src="../../../public/faq.png" alt="" />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <div className="collapse collapse-plus border-stone-400 border-b text-white rounded-none ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                NEW GRADIENT COLOR FINISHES
              </div>
              <div className="collapse-content">
                <p>
                  Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui official.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus border-stone-400 border-b text-white rounded-none ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                FOUR-SIDED CURVED CERAMIC BODY
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui official.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus border-stone-400 border-b text-white rounded-none ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                4000MAH HIGH-CAPACITY BATTERY
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui official.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus border-stone-400 border-b text-white rounded-none ">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                FULLY HIDDEN CAMERA LENS
              </div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui official.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
