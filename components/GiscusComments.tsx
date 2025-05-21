'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

{
  /* <script src="https://giscus.app/client.js"
        data-repo="deepdevy/notionBlog-giscus"
        data-repo-id="R_kgDOOt5G0g"
        data-category="Announcements"
        data-category-id="DIC_kwDOOt5G0s4Cqavw"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="ko"
        crossorigin="anonymous"
        async>
</script> */
}

export default function GiscusComments() {
  const { theme } = useTheme();
  return (
    <Giscus
      repo="deepdevy/notionBlog-giscus"
      repoId="R_kgDOOt5G0g"
      category="Announcements"
      categoryId="DIC_kwDOOt5G0s4Cqavw"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === 'dark' ? 'dark' : 'light'}
      lang="ko"
    />
  );
}
