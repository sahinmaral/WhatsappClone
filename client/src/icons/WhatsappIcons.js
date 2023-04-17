import React from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";

function WhatsappIcons({ type, style, width, height }) {
  switch (type) {
    case "attachment":
      return (
        <svg
          xmlSpace="preserve"
          width={width}
          height={height}
          className={style}
        >
          <path
            fill="currentColor"
            d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
          />
        </svg>
      );
    case "emoji":
      return (
        <svg
          xmlSpace="preserve"
          width={width}
          height={height}
          className={style}
        >
          <path
            fill="currentColor"
            d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          xmlSpace="preserve"
          width={width}
          height={height}
          className={style}
        >
          <path
            fill="currentColor"
            d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
          />
        </svg>
      );
    case "filter":
      return (
        <svg
          xmlSpace="preserve"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          //ml-3 mt-[0.35em] text-[#54656F]
          className={style}
        >
          <path
            fill="currentColor"
            d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"
          />
        </svg>
      );
    case "message":
      return (
        <svg
          xmlSpace="preserve"
          width={width}
          height={height}
          className={style}
        >
          <path
            fill="currentColor"
            d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
          />
        </svg>
      );
    case "social":
      return (
        <svg width={width} height={height} fill="none" className={style}>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M19.215 12.144a2.543 2.543 0 0 0 .295.881 2.325 2.325 0 0 0 .577.67 2.261 2.261 0 0 0 .685.36 2.331 2.331 0 0 0 .688.104c1.253 0 2.27-1.068 2.27-2.386s-1.017-2.387-2.27-2.387a2.279 2.279 0 0 0-.999.229 2.233 2.233 0 0 0-.95.905 2.342 2.342 0 0 0-.252.644 2.725 2.725 0 0 0-.044.98Zm-10.43 0a2.426 2.426 0 0 1-.148.572 2.424 2.424 0 0 1-.268.499 2.236 2.236 0 0 1-.83.714 2.265 2.265 0 0 1-.532.183c-.153.031-.31.047-.467.047-1.253 0-2.27-1.068-2.27-2.386s1.017-2.387 2.27-2.387a2.28 2.28 0 0 1 .999.229 2.234 2.234 0 0 1 .95.905 2.349 2.349 0 0 1 .252.644 2.73 2.73 0 0 1 .044.98Zm17.084 5.821a3.787 3.787 0 0 0-.235-.364 4.645 4.645 0 0 0-.39-.474 4.837 4.837 0 0 0-1.486-1.077l-.012-.006a6.337 6.337 0 0 0-5.035 0c-.023.01-.044.022-.066.033-.036.017-.07.036-.104.054l.059.033a7.977 7.977 0 0 1 2.67 2.556c.064.102.12.193.166.277.09.154.157.32.198.494l.018.123H26v-1.387a2.185 2.185 0 0 0-.131-.262Zm-8.341-7.798a4.016 4.016 0 0 0-.233-.9 3.752 3.752 0 0 0-.421-.784A3.471 3.471 0 0 0 14 7c-2.021 0-3.568 1.625-3.568 3.75 0 2.126 1.546 3.75 3.568 3.75a3.665 3.665 0 0 0 1.08-.165 3.472 3.472 0 0 0 1.983-1.617 3.753 3.753 0 0 0 .395-1.013 4.301 4.301 0 0 0 .07-1.538Zm3.091 9.289a5.866 5.866 0 0 0-.337-.538 6.701 6.701 0 0 0-.555-.695 6.958 6.958 0 0 0-2.137-1.592c-.94-.452-2.122-.767-3.59-.767-1.469 0-2.65.315-3.59.767-.032.015-.062.032-.094.048a7.44 7.44 0 0 0-.597.335 7.159 7.159 0 0 0-.878.651 7.022 7.022 0 0 0-1.322 1.553 5.771 5.771 0 0 0-.33.621V22h13.622v-2.16a3.82 3.82 0 0 0-.192-.384Zm-14.264.036a.63.63 0 0 1 .081-.242c.034-.066.059-.145.111-.237.058-.1.104-.19.168-.291.068-.107.14-.221.228-.343a7.79 7.79 0 0 1 2.516-2.257c-.028-.015-.055-.03-.085-.044l-.066-.033a5.896 5.896 0 0 0-2.52-.522 5.896 5.896 0 0 0-2.52.522l-.012.005a4.853 4.853 0 0 0-1.09.699 4.981 4.981 0 0 0-.613.623 4.718 4.718 0 0 0-.315.433c-.037.059-.073.112-.1.16-.093.162-.138.263-.138.263v1.386h4.347l.008-.122Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "voice-record":
      return (
        <svg
          xmlSpace="preserve"
          width={width}
          height={height}
          className={style}
        >
          <path
            fill="currentColor"
            d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"
          />
        </svg>
      );
    case "welcome":
      return (
        <svg width={width} fill="none" viewBox="0 0 303 172" className={style}>
          <path
            fill="#DAF7F3"
            fillRule="evenodd"
            d="M229.565 160.229c32.647-10.984 57.366-41.988 53.825-86.81-5.381-68.1-71.025-84.993-111.918-64.932C115.998 35.7 108.972 40.16 69.239 40.16c-29.594 0-59.726 14.254-63.492 52.791-2.73 27.933 8.252 52.315 48.89 64.764 73.962 22.657 143.38 13.128 174.928 2.513Z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M131.589 68.942h.01c6.261 0 11.336-5.263 11.336-11.756S137.86 45.43 131.599 45.43c-5.081 0-9.381 3.466-10.822 8.242a7.302 7.302 0 0 0-2.404-.405c-4.174 0-7.558 3.51-7.558 7.838s3.384 7.837 7.558 7.837h13.216ZM105.682 128.716c3.504 0 6.344-2.808 6.344-6.27 0-3.463-2.84-6.27-6.344-6.27-1.156 0-2.24.305-3.173.839v-.056c0-6.492-5.326-11.756-11.896-11.756-5.29 0-9.775 3.413-11.32 8.132a8.025 8.025 0 0 0-2.163-.294c-4.38 0-7.93 3.509-7.93 7.837 0 4.329 3.55 7.838 7.93 7.838h28.552Z"
            clipRule="evenodd"
          />
          <rect
            width="50.58"
            height="100.068"
            x=".445"
            y=".55"
            fill="#42CBA5"
            stroke="#316474"
            rx="7.5"
            transform="rotate(6 -391.775 121.507) skewX(.036)"
          />
          <rect
            width="50.403"
            height="99.722"
            x=".445"
            y=".55"
            fill="#fff"
            stroke="#316474"
            rx="7.5"
            transform="rotate(6 -356.664 123.217) skewX(.036)"
          />
          <path
            fill="#EEFEFA"
            stroke="#316474"
            d="m57.16 51.735-8.568 82.024a5.495 5.495 0 0 1-6.042 4.895l-32.97-3.465a5.504 5.504 0 0 1-4.897-6.045l8.569-82.024a5.496 5.496 0 0 1 6.041-4.895l5.259.553 22.452 2.36 5.259.552a5.504 5.504 0 0 1 4.898 6.045Z"
          />
          <path
            fill="#316474"
            d="M26.2 102.937c.863.082 1.732.182 2.602.273.238-2.178.469-4.366.69-6.546l-2.61-.274c-.238 2.178-.477 4.365-.681 6.547Zm-2.73-9.608 2.27-1.833 1.837 2.264 1.135-.917-1.838-2.266 2.27-1.833-.92-1.133-2.269 1.834-1.837-2.264-1.136.916 1.839 2.265-2.27 1.835.92 1.132Zm-.816 5.286c-.128 1.3-.265 2.6-.41 3.899.877.109 1.748.183 2.626.284.146-1.31.275-2.614.413-3.925-.878-.092-1.753-.218-2.629-.258Zm16.848-8.837c-.506 4.801-1.019 9.593-1.516 14.396.88.083 1.748.192 2.628.267.496-4.794 1-9.578 1.513-14.37-.864-.143-1.747-.192-2.625-.293Zm-4.264 2.668c-.389 3.772-.803 7.541-1.183 11.314.87.091 1.74.174 2.601.273.447-3.912.826-7.84 1.255-11.755-.855-.15-1.731-.181-2.589-.306-.04.156-.069.314-.084.474Zm-4.132 1.736c-.043.159-.06.329-.077.49-.297 2.896-.617 5.78-.905 8.676l2.61.274c.124-1.02.214-2.035.33-3.055.197-2.036.455-4.075.627-6.115-.863-.08-1.724-.17-2.585-.27Z"
          />
          <path
            fill="#fff"
            stroke="#316474"
            d="M17.892 48.489a1.652 1.652 0 0 0 1.468 1.803 1.65 1.65 0 0 0 1.82-1.459 1.652 1.652 0 0 0-1.468-1.803 1.65 1.65 0 0 0-1.82 1.459ZM231.807 136.678l-33.863 2.362c-.294.02-.54-.02-.695-.08a.472.472 0 0 1-.089-.042l-.704-10.042a.61.61 0 0 1 .082-.054c.145-.081.383-.154.677-.175l33.863-2.362c.294-.02.54.02.695.08.041.016.069.03.088.042l.705 10.042a.61.61 0 0 1-.082.054 1.678 1.678 0 0 1-.677.175Z"
          />
          <path
            fill="#fff"
            d="m283.734 125.679-138.87 9.684c-2.87.2-5.371-1.963-5.571-4.823l-6.234-88.905c-.201-2.86 1.972-5.35 4.844-5.55l138.87-9.684c2.874-.2 5.371 1.963 5.572 4.823l6.233 88.905c.201 2.86-1.971 5.349-4.844 5.55Z"
          />
          <path
            stroke="#316474"
            d="M144.864 135.363c-2.87.2-5.371-1.963-5.571-4.823l-6.234-88.905c-.201-2.86 1.972-5.35 4.844-5.55l138.87-9.684c2.874-.2 5.371 1.963 5.572 4.823l6.233 88.905c.201 2.86-1.971 5.349-4.844 5.55"
          />
          <path
            fill="#EEFEFA"
            stroke="#316474"
            d="m278.565 121.405-129.885 9.058c-2.424.169-4.506-1.602-4.668-3.913l-5.669-80.855c-.162-2.31 1.651-4.354 4.076-4.523l129.885-9.058c2.427-.169 4.506 1.603 4.668 3.913l5.669 80.855c.162 2.311-1.649 4.354-4.076 4.523Z"
          />
          <path
            fill="#42CBA5"
            stroke="#316474"
            d="m230.198 129.97 68.493-4.777.42 5.996c.055.781-.098 1.478-.363 1.972-.27.5-.611.726-.923.748l-165.031 11.509c-.312.022-.681-.155-1.017-.613-.332-.452-.581-1.121-.636-1.902l-.42-5.996 68.494-4.776c.261.79.652 1.483 1.142 1.998.572.6 1.308.986 2.125.929l24.889-1.736c.817-.057 1.491-.54 1.974-1.214.413-.577.705-1.318.853-2.138Z"
          />
          <path
            fill="#fff"
            stroke="#316474"
            d="m230.367 129.051 69.908-4.876.258 3.676a1.51 1.51 0 0 1-1.403 1.61l-168.272 11.735a1.51 1.51 0 0 1-1.613-1.399l-.258-3.676 69.909-4.876a3.323 3.323 0 0 0 3.188 1.806l25.378-1.77a3.32 3.32 0 0 0 2.905-2.23Z"
          />
          <circle
            r="15.997"
            fill="#42CBA5"
            stroke="#316474"
            transform="rotate(-3.989 1304.861 -2982.552) skewX(.021)"
          />
          <path
            fill="#fff"
            stroke="#316474"
            d="m208.184 87.11-3.407-2.75-.001-.002a1.952 1.952 0 0 0-2.715.25 1.89 1.89 0 0 0 .249 2.692l.002.001 5.077 4.11v.001a1.95 1.95 0 0 0 2.853-.433l8.041-12.209a1.892 1.892 0 0 0-.573-2.643 1.95 1.95 0 0 0-2.667.567l-6.859 10.415Z"
          />
        </svg>
      );
    case "three-dot":
      return (
        <svg
          xmlSpace="preserve"
          width={width}
          height={height}
          className={style}
        >
          <path
            fill="currentColor"
            d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
          />
        </svg>
      );
    case "status":
      return (
        <svg
          xmlSpace="preserve"
          width={width}
          height={height}
          className={style}
        >
          <path
            fill="currentColor"
            d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"
          />
        </svg>
      );
    case "lock":
      return (
        <svg width={width} height={height}>
          <path
            fill="currentColor"
            d="M5.008 1.6c1.375 0 2.501 1.074 2.586 2.427l.005.164v1.271h.158c.585 0 1.059.48 1.059 1.07v3.351c0 .59-.474 1.07-1.059 1.07h-5.5c-.582 0-1.057-.48-1.057-1.07V6.531c0-.59.474-1.069 1.058-1.069h.158V4.191c0-1.375 1.075-2.501 2.429-2.586l.163-.005Zm0 1.248c-.696 0-1.272.534-1.337 1.214l-.006.129-.002 1.271H6.35l.001-1.271c0-.653-.47-1.2-1.088-1.319l-.126-.018-.129-.006Z"
          />
        </svg>
      );
    case "loading":
      return <Loading width={width} height={height} />;
    case "bell":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={width}
          height={height}
        >
          <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
        </svg>
      );
    default:
      return <></>;
  }
}

WhatsappIcons.defaultProps = {
  width: "30",
  height: "30",
};

WhatsappIcons.propTypes = {
  type: PropTypes.oneOf([
    "attachment",
    "emoji",
    "search",
    "filter",
    "message",
    "social",
    "voice-record",
    "welcome",
    "three-dot",
    "status",
    "lock",
    "loading",
    "bell",
  ]).isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  style: PropTypes.string,
};

export default WhatsappIcons;
