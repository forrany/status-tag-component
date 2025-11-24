import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ command, mode }) => {
  // 开发模式配置
  const isDev = command === 'serve';

  return {
    // 开发服务器配置
    server: {
      host: '0.0.0.0',
      port: 5174,
      open: '/playground/', // 自动打开 playground 页面
      allowedHosts: true,
      fs: {
        allow: ['..']
      }
    },

    // 根目录设置（开发模式使用 playground，构建模式使用 src）
    root: isDev ? '.' : '.',

    // 构建配置
    build: {
      // 只在构建库时使用 lib 配置
      ...(isDev ? {} : {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'StatusTag',
          fileName: 'status-tag',
          formats: ['umd', 'es']
        },
        rollupOptions: {
          external: [],
          output: {
            globals: {}
          }
        },
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      }),
      sourcemap: mode === 'development',
      outDir: 'dist'
    },

    // CSS 配置
    css: {
      modules: {
        localsConvention: 'camelCase'
      }
    },

    // 解析配置
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  };
});
