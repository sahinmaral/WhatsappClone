import ChatList from "./ChatList";
import WhatsappIcons from "../icons/WhatsappIcons";
import MyProfileDescription from "./MyProfileDescription";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import { LEFT_PANEL_STATES } from "../constants";
import { useDispatch} from "react-redux";
import DefaultLeftPanelOptionsMenu from "./DefaultLeftPanelOptionsMenu";

function DefaultLeftPanelContent() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between pr-[4px] pl-[20px] py-[15px] default-left-panel bg-[#F0F2F5] dark:bg-whatsapp-green-dark-2">
        <div
          onClick={() =>
            dispatch(setLeftPanelState(LEFT_PANEL_STATES.UPDATE_PROFILE))
          }
        >
          <MyProfileDescription />
        </div>
        <div className="options">
          <span
            onClick={() =>
              dispatch(setLeftPanelState(LEFT_PANEL_STATES.ADD_FRIEND))
            }
          >
            <WhatsappIcons
              type="add-friend"
              width="24"
              height="24"
              style={`mx-2 mt-[0.4em] text-[#54656F] dark:text-[#AEBAC1]`}
            />
          </span>
          <span
            onClick={() =>
              dispatch(
                setLeftPanelState(LEFT_PANEL_STATES.SHOW_BLOCKED_FRIENDS)
              )
            }
          >
            <WhatsappIcons
              type="blocked-users"
              width="24"
              height="24"
              style={`mx-2 mt-[0.5em] text-[#54656F] dark:text-[#AEBAC1]`}
            />
          </span>
          <DefaultLeftPanelOptionsMenu />
        </div>
      </div>

      <div className="flex h-[51px] px-[10px] py-[8px] bg-white dark:bg-whatsapp-green-dark">
        <form className="w-full">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <WhatsappIcons
                type="search"
                width="24"
                height="24"
                style={`text-gray-500 dark:text-gray-400`}
              />
            </div>
            <input
              type="search"
              id="default-search"
              autoComplete="off"
              className="block w-full text-[12px] p-4 pl-10 text-sm h-[20px] text-gray-900 dark:text-gray-400 rounded-lg focus:outline-none bg-[#F0F2F5] dark:bg-whatsapp-green-dark-2"
              placeholder="Search or start new chat"
            />
          </div>
        </form>

        <WhatsappIcons
          type="filter"
          style={`ml-2 mt-0 text-[#54656F] dark:text-[#AEBAC1]`}
        />
      </div>

      <ChatList />
    </>
  );
}

export default DefaultLeftPanelContent;
