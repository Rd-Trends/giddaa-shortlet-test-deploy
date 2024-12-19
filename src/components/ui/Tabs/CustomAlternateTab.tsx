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
  extraBeforeContent?: React.ReactNode;
};

const CustomAlternateTab: React.FC<CustomTabsProps> = ({
  tabs,
  searchParamKey,
  classNames,
  extraBeforeContent,
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
          " w-fit flex items-center gap-4 justify-center ",
          classNames?.tabsList ?? ""
        )}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            className={cn(
              "rounded-full h-[27px] px-6 py-2 text-body-tiny leading-none font-medium text-primary data-[state=active]:text-white ",
              "data-[state=active]:bg-primary data-[state=active]:font-bold transition-colors duration-300 uppercase border border-primary",
              classNames?.tabsTrigger ?? ""
            )}
            value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {extraBeforeContent}

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

export default CustomAlternateTab;
