import { useManageSearchParams } from "@/hooks/useManageSearchParams";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { TabsContent } from ".";
import { cn } from "@/utils/classname";

type Tab = {
  label: string;
  value: string;
  content: React.ReactNode;
};

type CustomTabsProps = {
  tabs: Tab[];
  searchParamKey?: string;
  classNames?: {
    tabsList?: string;
    tabsTrigger?: string;
    tabsContent?: string;
  };
};

const CustomSecondaryTabs: React.FC<CustomTabsProps> = ({
  tabs,
  searchParamKey,
  classNames,
}) => {
  const searchParams = useManageSearchParams();
  const defaultValue =
    searchParams.get(searchParamKey ?? "tab") ?? tabs[0].value;

  return (
    <Tabs
      defaultValue={defaultValue}
      onValueChange={(tab) => {
        if (searchParamKey) {
          searchParams.set(searchParamKey, tab);
        }
      }}>
      <TabsList
        className={cn(
          " mx-auto flex items-center justify-center h-[34px] w-fit rounded-full p-0.5 border border-mid-grey",
          classNames?.tabsList ?? ""
        )}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            className={cn(
              "rounded-full h-full px-3 text-body-tiny leading-none font-semibold text-primary data-[state=active]:text-white data-[state=active]:bg-primary data-[state=active]:font-bold transition-colors duration-300 uppercase",
              classNames?.tabsTrigger ?? ""
            )}
            value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className={classNames?.tabsContent ?? ""}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CustomSecondaryTabs;
