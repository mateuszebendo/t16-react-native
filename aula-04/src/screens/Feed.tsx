import { View, Text } from "react-native";
import { FeedProps } from "../routes/stack";

const Feed = ({ route }: FeedProps) => {
  // const { info } = route.params;
  const props = route.params;
  return (
    <View>
      <Text>Feed</Text>
      <Text>INFO: {props?.info}</Text>
    </View>
  );
};

export default Feed;
