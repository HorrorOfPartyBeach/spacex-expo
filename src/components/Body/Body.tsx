import { StyleSheet, Text, View, Button } from "react-native";

import CONSTANTS from "../../constants/Config";
import { useLaunchContext } from "../../contexts/LaunchContext";

export const Body = () => {
  // const { filter, setSort, sort, items, years } = useLaunchContext();

  return (
    <View>
      <div>
        <img
          src={CONSTANTS.SPACE_X_IMAGE}
          srcSet={CONSTANTS.SPACE_X_RETINA_IMAGES}
          alt="Launch Home"
        />
      </div>
      <div className="app__launches">
        <div className="app__filters">
          <Button
            title="button"
            // filter={filter}
            // style={styles.button}
            // onPress={() => setSort(!sort)}
            // label={sort ? LABEL.ASC : LABEL.DESC}
          />
        </div>
        {/* <LaunchList items={items} filter={filter} sort={sort} /> */}
      </div>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
  },
});
