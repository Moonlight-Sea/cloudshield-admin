import Vue from '@vitejs/plugin-vue'
// Element Plus 自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// end


export function createVitePlugins() {
  
    return [
      Vue(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          'vue',
          'vue-router'
        ],
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        // 自定义组件的解析器
        resolvers: [ElementPlusResolver()],
        globs: ["src/components/**/**.{vue, md}"]
      })
    ]
  }
  